namespace Pharmacy.Entities
{
    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Descripton { get; set; }
        public float Price { get; set; }
        public string PictureUrl { get; set; }
        public string Category { get; set; }
        public string Brand { get; set; }
        public int QuantityInStock { get; set; }
    }
}
