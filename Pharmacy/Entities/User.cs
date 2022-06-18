using Microsoft.AspNetCore.Identity;

namespace Pharmacy.Entities
{
    public class User : IdentityUser<int>
    {
        public UserAddress Address { get; set; }
    }
}
