using Microsoft.EntityFrameworkCore.Migrations;

namespace Pharmacy.Data.Migrations
{
    public partial class IdentityModified : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "077a9759-5f42-4959-b209-e80d1fa02b19");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "27e00506-482b-4160-81b4-bfc2c96d4637");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "60c51de0-ca9b-4e1b-b0b6-4c13d59a662f", "e06c3657-55c9-45f3-b4bb-94b081fc189c", "Member", "MEMBER" });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "a2dcb4a3-f862-4e29-abc9-f4e4db471920", "4acbf5b7-056d-4e71-a529-ae9f8c807ce2", "Admin", "ADMIN" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "60c51de0-ca9b-4e1b-b0b6-4c13d59a662f");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "a2dcb4a3-f862-4e29-abc9-f4e4db471920");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "27e00506-482b-4160-81b4-bfc2c96d4637", "479a72ff-6b9b-44c7-8270-dfdc2106af44", "Member", "MEMBER" });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "077a9759-5f42-4959-b209-e80d1fa02b19", "1d8fbcd5-0004-45fe-9da8-2266ab3a10f0", "Admin", "ADMIN" });
        }
    }
}
