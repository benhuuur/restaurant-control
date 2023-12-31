using System;
using System.Threading.Tasks;
using back.Services;
using DTO;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace back.Controllers;

[ApiController]
[Route("products")]
public class ProductController : ControllerBase
{
    [EnableCors("DefaultPolicy")]
    [HttpGet("")]
    public async Task<IActionResult> GetProducts(
        [FromServices]IProductService service
    )
    {
        var products = await service.GetProducts();
        return Ok(new{products});
    }
    
    [EnableCors("DefaultPolicy")]
    [HttpGet("salgados")]
    public async Task<IActionResult> GetSavory (
        [FromServices]IProductService service
    )
    {
        var products = await service.GetSavory();
        return Ok(new{products});
    }
    
    [EnableCors("DefaultPolicy")]
    [HttpGet("doces")]
    public async Task<IActionResult> GetCandies (
        [FromServices]IProductService service
    )
    {
        var products = await service.GetCandies();
        return Ok(new{products});
    }
    
    [EnableCors("DefaultPolicy")]
    [HttpGet("bebidas")]
    public async Task<IActionResult> GetDrinks (
        [FromServices]IProductService service
    )
    {
        var products = await service.GetDrinks();
        return Ok(new{products});
    }

    [EnableCors("DefaultPolicy")]
    [HttpPost("register")]
    public async Task<IActionResult> Create(
         [FromBody] ProductCreateData product,
        [FromServices] IProductService service
    )
    {
        await service.Create(product);
        return Ok(new { message = true });
    }
    [EnableCors("DefaultPolicy")]
    [HttpPost("delete")]
    public async Task<IActionResult> Delete(
         [FromBody] ProductDeleteData product,
        [FromServices] IProductService service
    )
    {
        await service.DeleteById(product.id);
        return Ok(new { message = true });
    }
}
