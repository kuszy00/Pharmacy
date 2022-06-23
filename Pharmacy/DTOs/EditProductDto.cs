using Microsoft.AspNetCore.Http;
using System.ComponentModel.DataAnnotations;

namespace Pharmacy.DTOs
{
    public class EditProductDto
    {
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public string Description { get; set; }

        [Required]
        [Range(0, double.PositiveInfinity)]
        public float Price { get; set; }

        public IFormFile File { get; set; }

        [Required]
        public string Category { get; set; }

        [Required]
        public string Brand { get; set; }

        [Required]
        [Range(0, 300)]
        public int QuantityInStock { get; set; }
    }
}
