﻿// <auto-generated />
using System;
using MDS_backend.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace MDS_backend.Migrations
{
    [DbContext(typeof(backendContext))]
    partial class backendContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.3")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder, 1L, 1);

            modelBuilder.Entity("MDS_backend.Entities.BandHQ", b =>
                {
                    b.Property<int>("BandId")
                        .HasColumnType("int");

                    b.Property<string>("City")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Country")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("SquareMeters")
                        .HasColumnType("int");

                    b.Property<string>("Address")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("BandId");

                    b.ToTable("Headquarters");
                });

            modelBuilder.Entity("MDS_backend.Entities.MusicalBand", b =>
                {
                    b.Property<int>("BandId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("BandId"), 1L, 1);

                    b.Property<bool?>("Complete")
                        .HasColumnType("bit");

                    b.Property<DateTime?>("DateFormed")
                        .HasColumnType("datetime2");

                    b.Property<string>("MusicGenre")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("BandId");

                    b.ToTable("MusicalBands");
                });

            modelBuilder.Entity("MDS_backend.Entities.User", b =>
                {
                    b.Property<int>("UserId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("UserId"), 1L, 1);

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasMaxLength(20)
                        .HasColumnType("nvarchar(20)");

                    b.Property<string>("Username")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.HasKey("UserId");

                    b.HasIndex("Email")
                        .IsUnique();

                    b.HasIndex("Username")
                        .IsUnique();

                    b.ToTable("Users");
                });

            modelBuilder.Entity("MDS_backend.Entities.UserAddress", b =>
                {
                    b.Property<int>("UserId")
                        .HasColumnType("int");

                    b.Property<string>("City")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Country")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Street")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("UserId");

                    b.ToTable("UserAddresses");
                });

            modelBuilder.Entity("MDS_backend.Entities.UserProfile", b =>
                {
                    b.Property<int>("UserId")
                        .HasColumnType("int");

                    b.Property<int?>("Age")
                        .HasColumnType("int");

                    b.Property<int?>("BandId")
                        .HasColumnType("int");

                    b.Property<bool?>("CanSing")
                        .HasColumnType("bit");

                    b.Property<string>("FirstName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("LastName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Occupation")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Phone")
                        .HasMaxLength(20)
                        .HasColumnType("nvarchar(20)");

                    b.Property<string>("PlayedInstrument")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PreferredMusicGenre")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Trait1")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Trait2")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("UserId");

                    b.HasIndex("BandId");

                    b.ToTable("UserProfiles");
                });

            modelBuilder.Entity("MDS_backend.Entities.BandHQ", b =>
                {
                    b.HasOne("MDS_backend.Entities.MusicalBand", "Band")
                        .WithOne("HQ")
                        .HasForeignKey("MDS_backend.Entities.BandHQ", "BandId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Band");
                });

            modelBuilder.Entity("MDS_backend.Entities.UserAddress", b =>
                {
                    b.HasOne("MDS_backend.Entities.UserProfile", "Profile")
                        .WithOne("Address")
                        .HasForeignKey("MDS_backend.Entities.UserAddress", "UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Profile");
                });

            modelBuilder.Entity("MDS_backend.Entities.UserProfile", b =>
                {
                    b.HasOne("MDS_backend.Entities.MusicalBand", "Band")
                        .WithMany("Members")
                        .HasForeignKey("BandId");

                    b.HasOne("MDS_backend.Entities.User", "Owner")
                        .WithOne("Profile")
                        .HasForeignKey("MDS_backend.Entities.UserProfile", "UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Band");

                    b.Navigation("Owner");
                });

            modelBuilder.Entity("MDS_backend.Entities.MusicalBand", b =>
                {
                    b.Navigation("HQ");

                    b.Navigation("Members");
                });

            modelBuilder.Entity("MDS_backend.Entities.User", b =>
                {
                    b.Navigation("Profile")
                        .IsRequired();
                });

            modelBuilder.Entity("MDS_backend.Entities.UserProfile", b =>
                {
                    b.Navigation("Address");
                });
#pragma warning restore 612, 618
        }
    }
}
