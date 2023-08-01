using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SimpleAuth.Migrations
{
    public partial class add_movie6 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_favFilms_AspNetUsers_UserNameId",
                table: "favFilms");

            migrationBuilder.DropIndex(
                name: "IX_favFilms_UserNameId",
                table: "favFilms");

            migrationBuilder.DropColumn(
                name: "UserNameId",
                table: "favFilms");

            migrationBuilder.AddColumn<Guid>(
                name: "UserName",
                table: "favFilms",
                type: "uniqueidentifier",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "UserName",
                table: "favFilms");

            migrationBuilder.AddColumn<string>(
                name: "UserNameId",
                table: "favFilms",
                type: "nvarchar(450)",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_favFilms_UserNameId",
                table: "favFilms",
                column: "UserNameId");

            migrationBuilder.AddForeignKey(
                name: "FK_favFilms_AspNetUsers_UserNameId",
                table: "favFilms",
                column: "UserNameId",
                principalTable: "AspNetUsers",
                principalColumn: "Id");
        }
    }
}
