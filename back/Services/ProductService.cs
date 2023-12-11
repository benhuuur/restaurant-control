using System.Collections.Generic;
using System.Threading.Tasks;
using back.Model;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using DTO;

namespace back.Services;

// public class ProductService : IImageService
public class ProductService : IProductService
{
    RestaurantContext context;

    public ProductService(RestaurantContext context)
    {
        this.context = context;
    }

    public async Task<List<Product>> GetProducts()
    {
        return await context.Products.ToListAsync();
    }

    public async Task<List<Product>> GetSavory()
    {
        var query = from p in this.context.Products where p.Type == "Salgado" select p;
        return await query.ToListAsync();
    }

    public async Task<List<Product>> GetCandies()
    {
        var query = from p in this.context.Products where p.Type == "Doce" select p;
        return await query.ToListAsync();
    }

    public async Task<List<Product>> GetDrinks()
    {
        var query = from p in this.context.Products where p.Type == "Bebida" select p;
        return await query.ToListAsync();
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

        context.Add(product);
        await context.SaveChangesAsync();
    }

    public async Task DeleteById(int Id)
    {
        var product = await this.context.Products.FindAsync(Id);

        if (product != null)
        {
            this.context.Remove(product);
            await context.SaveChangesAsync();
        }
    }
}
