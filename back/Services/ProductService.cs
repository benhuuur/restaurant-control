using System.Collections.Generic;
using System.Threading.Tasks;
using back.Model;
using back.Services;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using System;
using DTO;

public class ProductService : IProductService
{
    RestaurantContext context;

    public ProductService(RestaurantContext context)
    {
        this.context = context;
    }

    public async Task<List<Product>> GetProducts()
    {
        // var query = from p in this.context.Products select p;
        // return await query.ToListAsync<Product>();
        var query = this.context.Products;
        return await query.ToListAsync<Product>();
    }

    public async Task Create(ProductCreateData data) 
    { 
        Product product = new Product();
        product.Name = data.name;
        product.Description = data.description;
        product.Type = data.type;
        product.Price = data.price;
        // product.Picture = data.picture;
        product.OffersPrice = null;
        product.IsOffers = false;

        this.context.Add(product);
        await this.context.SaveChangesAsync();
    }
}
