using System.Threading.Tasks;

namespace back.Services;

using System.Collections.Generic;
using DTO;
using Model;

public interface IProductService
{
    Task<List<Product>> GetProducts();
    Task Create(ProductCreateData data);
    Task DeleteById(int Id);
}
