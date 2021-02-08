using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace api.Extensions
{
    public static class CorsServiceExtesnion
    {
        public static IServiceCollection AddCorsServices(this IServiceCollection services, IConfiguration config)
        {
            services.AddCors(c=>c.AddPolicy("TCAPolicy",builder=> { 
                builder.WithOrigins("https://localhost:4200")
                  .AllowAnyMethod()
                  .AllowAnyHeader();
            }));
            return services;
        }
    }
}