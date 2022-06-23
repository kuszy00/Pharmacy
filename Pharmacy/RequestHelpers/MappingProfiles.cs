using AutoMapper;
using Pharmacy.DTOs;
using Pharmacy.Entities;

namespace Pharmacy.RequestHelpers
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<AddProductDto, Product>();
            CreateMap<EditProductDto, Product>();
        }
    }
}
