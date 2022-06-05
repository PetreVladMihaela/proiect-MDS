using MDS_backend.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;
using MDS_backend.Repositories;
using MDS_backend.Managers;


namespace MDS_backend
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        //This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors(options =>
            {
                options.AddPolicy(name: "_allowSpecificOrigins",
                                  builder =>
                                  {
                                      builder.WithOrigins("localhost:4200", "http://localhost:4200").AllowAnyMethod().AllowAnyHeader();
                                  });
            });

            services.AddControllers().AddNewtonsoftJson();

            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "proiect", Version = "v1" });

            });

            //Edit here Connection String after creating a new local Database
            //This Connection String will not work on your PCs
            services.AddDbContext<backendContext>(options => options.UseSqlServer(@"Server=(localdb)\MSSQLLocalDB;Initial Catalog=MDS_backend;Integrated Security=True;Connect Timeout=30;Encrypt=False;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False"));
            //services.AddDbContext<backendContext>(options => options.UseSqlServer(@"Server=(localdb)\MSSQLLocalDB;Initial Catalog=MDS_backend;"));


            //Install Microsoft.AspNetCore.Mvc.NewtonsoftJson
            services.AddControllersWithViews().AddNewtonsoftJson(options =>
                options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore);


            /*services.AddTransient - new instance of the service for each class that injects it
              services.AddScoped - same instance of the service for the entire duration of the request
              services.AddSingleton - one single instance in the entire app
            */
            services.AddTransient<IUsersRepository, UsersRepository>();
            services.AddTransient<IUsersManager, UsersManager>();

            services.AddTransient<IUserProfilesRepository, UserProfilesRepository>();
            services.AddTransient<IUserProfilesManager, UserProfilesManager>();

            services.AddTransient<IUserAddressesRepository, UserAddressesRepository>();
            services.AddTransient<IUserAddressesManager, UserAddressesManager>();

            services.AddTransient<IBandsRepository, BandsRepository>();
            services.AddTransient<IBandsManager, BandsManager>();

            services.AddTransient<IHeadquartersRepository, HeadquartersRepository>();
            services.AddTransient<IHeadquartersManager, HeadquartersManager>();

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "proiect v1"));
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseCors("_allowSpecificOrigins");

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
