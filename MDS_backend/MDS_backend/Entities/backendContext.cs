using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;


namespace MDS_backend.Entities
{
    //Required Nuget Packages
    /*   
      EntityFrameworkCore, care este ORM-ul in sine 
      EntityFrameworkCore.Relational 
      EntityFrameworkCore.SqlServer, care este provider-ul spre SqlServer(baza de date pe care o vom folosi)
      EntityFrameworkCore.Tools
    */

    //1. Add-Migration InitialCreate -> Package Manager Console
    //2. Verificati migration-ul 
    //3. Daca totul e ok, => Update-Database
    public class backendContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<MusicalBand> MusicalBands { get; set; }
        public DbSet<UserProfile> UserProfiles { get; set; }
        public DbSet<UserAddress> UserAddresses { get; set; }
        public DbSet<BandHQ> Headquarters { get; set; }

        public backendContext(DbContextOptions<backendContext> options) : base(options) {}
        //protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        //{
        //    optionsBuilder
        //        //.UseLoggerFactory(LoggerFactory.Create(builder => builder.AddConsole()))
        //        .UseSqlServer(@"Server=(localdb)\MSSQLLocalDB;Initial Catalog=MDS_backend;Integrated Security=True;Connect Timeout=30;Encrypt=False;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False");
        //}

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            //One to One
            builder.Entity<UserProfile>()
                .HasOne(profile => profile.Owner)
                .WithOne(user => user.Profile)
                .HasForeignKey<UserProfile>(profile => profile.UserId);

            //One to One
            builder.Entity<UserAddress>()
                .HasOne(address => address.Profile)
                .WithOne(profile => profile.Address)
                .HasForeignKey<UserAddress>(address => address.UserId);

            //One to One
            builder.Entity<BandHQ>()
                .HasOne(address => address.Band)
                .WithOne(band => band.HQ)
                .HasForeignKey<BandHQ>(HQ => HQ.BandId);

            //One to Many
            builder.Entity<MusicalBand>()
                .HasMany(band => band.Members)
                .WithOne(member => member.Band);
        }
    }
}
