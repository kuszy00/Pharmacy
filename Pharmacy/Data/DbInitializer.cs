using Pharmacy.Entities;
using System.Collections.Generic;
using System.Linq;

namespace Pharmacy.Data
{
    public static class DbInitializer
    {
        public static void Initialize(StoreContext context)
        {
            if (context.Products.Any()) return;

            var products = new List<Product>
            {
                new Product
                {
                    Name = "Apap 500 mg, 50 tabletek powlekanych",
                    Descripton = "APAP to produkt leczniczy dla dorosłych i młodzieży w wieku powyżej 12 lat o działaniu przeciwbólowym i przeciwgorączkowym. 1 tabletka zawiera 500mg paracetamolu (Paracetamolum), który jest substancją czynną leku. Apap stosuje się w przypadku bólu o różnej etiologii jak np. głowy (w tym napięciowe bóle głowy), menstruacyjnego, zębów, mięśni, kostno-stawowego czy gardła. Wskazaniem do stosowania leku są również nerwobóle oraz gorączka, które występują np. podczas przeziębienia i grypy. Opakowanie leku Apap zawiera 50 sztuk podłużnych tabletek powlekanych w kolorze białym.",
                    Price = 16.99F,
                    PictureUrl = "/Images/Products/apap-500-mg-50-tabletek-powlekanych.png",
                    Category = "Ból",
                    Brand = "Apap",
                    QuantityInStock = 50
                },
                new Product
                {
                    Name = "Voltaren Max 23,2 mg/ g, żel, 180 g",
                    Descripton = "Voltaren Max 100 g jest lekiem w postaci żelu, którego substancją czynną jest diklofenak. Diklofenak należy do grupy niesteroidowych leków przeciwzapalnych (NLPZ). Żel przeciwbólowy Voltaren max przeznaczony jest do stosowania miejscowego na skórę. Lek redukuje stany zapalne oraz obrzęki występujące w okolicach mięśni i stawów, a także łagodzi ból.",
                    Price = 43.99F,
                    PictureUrl = "/Images/Products/voltaren-max-23-2-mg-g-zel-180-g.png",
                    Category = "Ból",
                    Brand = "Voltaren",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "SEMA Lab Witamina C 1000 mg, 10 kapsułek celulozowych",
                    Descripton = "SEMA Lab Witamina C 1000 mg to suplement diety o wysokiej zawartości witaminy C w formie kwasu L-askorbinowego. Każda kapsułka pozwala na dostarczenie do organizmu 1000 mg składnika aktywnego.",
                    Price = 3.99F,
                    PictureUrl = "/Images/Products/sema-lab-witamina-c-1000-mg-10-kapsulek-celulozowych.png",
                    Category = "Witaminy",
                    Brand = "Sema Lab",
                    QuantityInStock = 70
                },
                new Product
                {
                    Name = "GAL VitaGal Witamina A, 60 kapsułek",
                    Descripton = "Zawarta w preparacie witamina A pomaga w prawidłowym funkcjonowaniu układu odpornościowego, utrzymaniu prawidłowego widzenia oraz przyczynia się do utrzymania właściwego metabolizmu żelaza. Pomaga również zachować zdrową skórę i prawidłowy stan błon śluzowych oraz odgrywa rolę w procesie specjalizacji komórek. Witaminę zawieszono w zimnotłoczonym oleju z nasion wiesiołka.",
                    Price = 9.99F,
                    PictureUrl = "/Images/Products/sema-lab-witamina-c-1000-mg-10-kapsulek-celulozowych.png",
                    Category = "Witaminy",
                    Brand = "GAL",
                    QuantityInStock = 30
                },
                new Product
                {
                    Name = "Rutinoscorbin 25 mg + 100 mg, 210 tabletek powlekanych",
                    Descripton = "Rutinoscorbin 25 mg + 100 mg to lek w postaci tabletek powlekanych, który łączy w sobie działanie rutozydu i witaminy C (kwasu askorbowego). Rutozyd zmniejsza przepuszczalność naczyń krwionośnych i wzmacnia je. Witamina C jest niezbędna w wielu procesach metabolicznych. Bierze udział w tworzeniu kolagenu, hemoglobiny, ułatwia przyswajanie żelaza, a także działa przeciwutleniająco. Zawarty w leku rutozyd chroni witaminę C przed utlenieniem. Dzięki temu dłużej zachowuje ona swoje właściwości.",
                    Price = 20.99F,
                    PictureUrl = "/Images/Products/rutinoscorbin-25-mg-100-mg-210-tabletek-powlekanych.png",
                    Category = "Witaminy",
                    Brand = "GSK",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Aspirin 500 mg, 10 tabletek",
                    Descripton = "Aspirin® firmy Bayer to lek w postaci tabletek o działaniu przeciwbólowym, przeciwgorączkowym oraz przeciwzapalnym. Wskazaniem do stosowania preparatu jest ból o nasileniu małym do umiarkowanego, w tym ból głowy, bóle mięśni, jak również gorączka i bóle towarzyszące przeziębieniu i grypie. Każda tabletka zawiera 500 mg kwasu acetylosalicylowego.",
                    Price = 7.59F,
                    PictureUrl = "/Images/Products/aspirin-500-mg-10-tabletek.png",
                    Category = "Przeziębienie i grypa",
                    Brand = "Aspirin",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Hitaxa Fast 5 mg, 10 tabletek",
                    Descripton = "Hitaxa Fast to lek przeciwalergiczny, niewywołującym senności. Ułatwia kontrolę reakcji alergicznej oraz jej objawów. Hitaxa Fast łagodzi objawy związane z alergicznym zapaleniem błony śluzowej nosa (zapalenie błony śluzowej nosa spowodowane uczuleniem, na przykład katarem siennym lub uczuleniem na roztocza) u dorosłych i młodzieży w wieku 12 lat i starszych. Do objawów tego stanu zalicza się: kichanie, swędzenie lub wydzielinę z nosa, swędzenie podniebienia oraz swędzenie, zaczerwienienie lub łzawienie oczu.",
                    Price = 11.99F,
                    PictureUrl = "/Images/Products/hitaxa-fast-5mg-10-tabletek.png",
                    Category = "Alergia",
                    Brand = "Adamed Pharma",
                    QuantityInStock = 50
                },
            };

            foreach (var product in products)
            {
                context.Products.Add(product);
            }

            context.SaveChanges();
        }
    }
}
