using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

using Trevisharp.Security.Jwt;

using back.Model;
using back.Services;
using System;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddScoped<RestaurantContext>();
builder.Services.AddTransient<IUserService, UserService>();
builder.Services.AddSingleton<CryptoService>(p => new(){
    InternalKeySize = 24,
    UpdatePeriod = TimeSpan.FromDays(1)
});
builder.Services.AddSingleton<ISecurityService, SecurityService>();
// builder.Services.AddTransient<IImageService, ProductService>();
builder.Services.AddScoped<IProductService, ProductService>();

// Cors
builder.Services.AddCors(options =>
{
    options.AddPolicy(
        "DefaultPolicy",
        policy =>
        {
            policy
                .AllowAnyHeader()
                .AllowAnyMethod()
                // .SetIsOriginAllowed(url => url == "http://localhost:4200/");
                .AllowAnyOrigin();
        }
    );
});

builder.Services.AddControllers();

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors();

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
