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
        [FromServices]IImageService service
    )
    {
        var products = await service.GetProducts();
        return Ok(new{products});
    }
    
    [EnableCors("DefaultPolicy")]
    [HttpGet("salgados")]
    public async Task<IActionResult> GetSavory (
        [FromServices]IImageService service
    )
    {
        var products = await service.GetProducts();
        return Ok(new{products});
    }

    [EnableCors("DefaultPolicy")]
    [HttpPost("register")]
    public async Task<IActionResult> Create(
         [FromBody] ProductCreateData product,
        [FromServices] IImageService service
    )
    {
        await service.Create(product);
        return Ok(new { message = true });
    }
}

    // [EnableCors("DefaultPolicy")]
    // [HttpPost("delete")]
    // public async Task<IActionResult> Delete(
    //      [FromBody] ProductData product,
    //     [FromServices] IProductService service
    // )
    // {
    //     await service.DeleteById(product.id);
    //     return Ok(new { message = true });
    // }