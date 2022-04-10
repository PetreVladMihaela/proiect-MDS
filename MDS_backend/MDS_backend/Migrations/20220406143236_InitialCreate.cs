using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MDS_backend.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "MusicalBands",
                columns: table => new
                {
                    BandId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    MusicGenre = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DateFormed = table.Column<DateTime>(type: "datetime2", nullable: true),
                    Complete = table.Column<bool>(type: "bit", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MusicalBands", x => x.BandId);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    Email = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Password = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Username = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.Email);
                });

            migrationBuilder.CreateTable(
                name: "Headquarters",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Country = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    City = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Street = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SquareMeters = table.Column<int>(type: "int", nullable: true),
                    BandId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Headquarters", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Headquarters_MusicalBands_BandId",
                        column: x => x.BandId,
                        principalTable: "MusicalBands",
                        principalColumn: "BandId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "UserProfiles",
                columns: table => new
                {
                    Email = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    FirstName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    LastName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Age = table.Column<int>(type: "int", nullable: true),
                    IsMusician = table.Column<bool>(type: "bit", nullable: true),
                    CanSing = table.Column<bool>(type: "bit", nullable: true),
                    PlayedInstrument = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PreferredMusicGenre = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    BandId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserProfiles", x => x.Email);
                    table.ForeignKey(
                        name: "FK_UserProfiles_MusicalBands_BandId",
                        column: x => x.BandId,
                        principalTable: "MusicalBands",
                        principalColumn: "BandId");
                    table.ForeignKey(
                        name: "FK_UserProfiles_Users_Email",
                        column: x => x.Email,
                        principalTable: "Users",
                        principalColumn: "Email",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "UserAddresses",
                columns: table => new
                {
                    Email = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Country = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    City = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Street = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserAddresses", x => x.Email);
                    table.ForeignKey(
                        name: "FK_UserAddresses_UserProfiles_Email",
                        column: x => x.Email,
                        principalTable: "UserProfiles",
                        principalColumn: "Email",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Headquarters_BandId",
                table: "Headquarters",
                column: "BandId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_UserProfiles_BandId",
                table: "UserProfiles",
                column: "BandId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Headquarters");

            migrationBuilder.DropTable(
                name: "UserAddresses");

            migrationBuilder.DropTable(
                name: "UserProfiles");

            migrationBuilder.DropTable(
                name: "MusicalBands");

            migrationBuilder.DropTable(
                name: "Users");
        }
    }
}
