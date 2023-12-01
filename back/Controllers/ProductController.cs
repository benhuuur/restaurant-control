using System;
using System.Threading.Tasks;
using back.Services;
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
        var products = await service.GetOffersOff();
        return Ok(new{products});
    }
}
