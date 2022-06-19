using System;
using System.Collections.Generic;

namespace Pharmacy.Entities.OrderAggregate
{
    public class Order
    {
        public int Id { get; set; }
        public string BuyerId { get; set; }
        public ShippingAddress ShippingAddress { get; set; }
        public DateTime OrderDate { get; set; } = DateTime.Now;
        public List<OrderItem> OrderItems { get; set; }
        public float Subtotal { get; set; }
        public float DeliveryFee { get; set; }
        public OrderStatus OrderStatus { get; set; } = OrderStatus.Pending;
        public string PaymentIntentId { get; set; }

        public float GetTotal()
        {
            return Subtotal + DeliveryFee;
        }
    }
}
