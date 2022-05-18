namespace Pharmacy.DTOs
{
    public class BasketItemDto
    {
        public int ProductId { get; set; }
        public string Name { get; set; }
        public float Price { get; set; }
        public string PictureUrl { get; set; }
        public string Category { get; set; }
        public string Brand { get; set; }
        public int Quantity { get; set; }
    }
}