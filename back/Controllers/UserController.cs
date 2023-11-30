using Microsoft.AspNetCore.Mvc;

namespace back.controllers;

using System;
using Services;
using DTO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Identity;
using Trevisharp.Security.Jwt;

[ApiController] //Controlador da API
[Route("user")]
public class UserController : ControllerBase
{
    [EnableCors("DefaultPolicy")]
    [HttpPost("login")]
    public async Task<IActionResult> Login(
        [FromBody] UserLoginData user,
        [FromServices] IUserService service,
        [FromServices] ISecurityService security,
        [FromServices] CryptoService crypto
    )
    {
        var logged = await service.GetByLogin(user.Login);

        if (logged == null)
            return Unauthorized("User not exists");

        var password = await security.HashPassword(user.Password, logged.Salt);
        var realPassword = logged.Password;
        if (password != realPassword)
            return Unauthorized("Incorrect password");
        var jwt = crypto.GetToken(new { id = logged.Id, isAdm = logged.IsAdm });
        return Ok(new { jwt });
    }

    [EnableCors("DefaultPolicy")]
    [HttpPost("register")]
    public async Task<IActionResult> Create(
        [FromBody] UserCreateData user,
        [FromServices] IUserService service
    )
    {
        if (await service.GetByLogin(user.Cpf) != null)
            return BadRequest(new { message = false });
        await service.Create(user);
        return Ok(new { message = true });
    }
}
