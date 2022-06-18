using Pharmacy.Entities.OrderAggregate;
using System;
using System.Collections.Generic;

namespace Pharmacy.DTOs
{
    public class OrderDto
    {
        public int Id { get; set; }
        public string BuyerId { get; set; }
        public ShippingAddress ShippingAddress { get; set; }
        public DateTime OrderDate { get; set; }
        public List<OrderItemDto> OrderItems { get; set; }
        public float Subtotal { get; set; }
        public float DeliveryFee { get; set; }
        public string OrderStatus { get; set; }
        public float Total { get; set; }
    }
}
