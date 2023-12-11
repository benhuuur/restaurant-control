using System.Threading.Tasks;

namespace back.Services;

using System.Collections.Generic;
using DTO;
using Model;

public interface IProductService
{
    Task<List<Product>> GetProducts();
    Task<List<Product>> GetSavory(); 
    Task<List<Product>> GetCandies(); 
    Task<List<Product>> GetDrinks(); 
    Task Create(ProductCreateData data);
    Task DeleteById(int Id);
}
