using Microsoft.Extensions.Configuration;
using Pharmacy.Entities;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Stripe;

namespace Pharmacy.Services
{
    public class PaymentService
    {
        private readonly IConfiguration _config;
        public PaymentService(IConfiguration config)
        {
            _config = config;
        }
        public async Task<PaymentIntent> CreateOrUpdatePaymentIntent(Basket basket)
        {
            StripeConfiguration.ApiKey = _config["StripeSettings:SecretKey"];

            var service = new PaymentIntentService();

            var intent = new PaymentIntent();

            var subtotal = basket.Items.Sum(item => (long)(item.Quantity * item.Product.Price * 100));
            var deliveryFee = subtotal > 10000 ? 0 : 2000;

            if (string.IsNullOrEmpty(basket.PaymentIntentId))
            {
                var options = new PaymentIntentCreateOptions
                {
                    Amount = subtotal + deliveryFee,
                    Currency = "pln",
                    PaymentMethodTypes = new List<string> { "card" }
                };
                intent = await service.CreateAsync(options);
            }
            else
            {
                var options = new PaymentIntentUpdateOptions
                {
                    Amount = subtotal + deliveryFee
                };
                await service.UpdateAsync(basket.PaymentIntentId, options);
            }

            return intent;
        }
    }
}
