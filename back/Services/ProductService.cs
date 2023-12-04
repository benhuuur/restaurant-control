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
    public ProductService(RestaurantContext context)
    {
        this.context = context;
    }

    public async Task<List<Product>> GetOffersOff()
    {
        // try
        // {
            var query = from p in this.context.Products where p.IsOffers == true select p;
            // Console.WriteLine( query.GetType());
            return await query.ToListAsync<Product>();
        // }
        // catch (System.NullReferenceException)
        // {
        //     return null;
        // }
    }
    public async Task Create(){

    }
}
