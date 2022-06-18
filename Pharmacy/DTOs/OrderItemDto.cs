namespace Pharmacy.DTOs
{
    public class OrderItemDto
    {
        public int ProductId { get; set; }
        public string Name { get; set; }
        public string PictureUrl { get; set; }
        public float Price { get; set; }
        public int Quantity { get; set; }
    }
}
