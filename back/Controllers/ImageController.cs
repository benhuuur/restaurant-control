namespace back.Controllers;

using System;
using System.IO;
using System.Threading.Tasks;
using DTO;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Model;
using Services;
using System.Linq;
using Microsoft.EntityFrameworkCore;

[ApiController]
[Route("image")]
public class ImageController : ControllerBase
{
    [DisableRequestSizeLimit]
    [HttpPut("")]
    [EnableCors("DefaultPolicy")]
    public async Task<IActionResult> AddImage()
    {
        var files = Request.Form.Files;
        if (files is null || files.Count == 0)
            return BadRequest();

        var file = Request.Form.Files[0];
        if (file.Length < 1)
            return BadRequest();
        using MemoryStream ms = new MemoryStream();
        await file.CopyToAsync(ms);
        var data = ms.GetBuffer();
        Image img = new Image();
        img.Picture = data;

        RestaurantContext context = new RestaurantContext();
        context.Add(img);
        await context.SaveChangesAsync();

        return Ok(new { id = img.Id });
    }

    [HttpGet("")]
    [EnableCors("DefaultPolicy")]
    public async Task<IActionResult> GetImage(int photoId)
    {
        RestaurantContext context = new RestaurantContext();
        var query = from image in context.Images where image.Id == photoId select image;
        var img = await query.FirstOrDefaultAsync();
        if (img is null)
            return NotFound();
        return File(img.Picture, "image/jpeg");
    }
}
