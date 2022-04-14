using Microsoft.EntityFrameworkCore.Migrations;

namespace Pharmacy.Data.Migrations
{
    public partial class FixedTypo : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Descripton",
                table: "Products",
                newName: "Description");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Description",
                table: "Products",
                newName: "Descripton");
        }
    }
}
