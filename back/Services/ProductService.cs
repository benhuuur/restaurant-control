using System.Collections.Generic;
using System.Threading.Tasks;
using back.Model;
using back.Services;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using System;

public class ProductService : IProductService
{
    RestaurantContext context;

    public async Task<List<Product>> GetAllProducts()
    {
        try
        {
            var query = from u in this.context.Products select u;
            Console.WriteLine(query);
            return await query.ToListAsync<Product>();
        }
        catch (System.NullReferenceException)
        {
            return null;
        }
    }
}
