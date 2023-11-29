using Microsoft.AspNetCore.Mvc;

namespace back.controllers;

using System;
using services;
using DTO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;

[ApiController] //Controlador da API
[Route("user")]
public class UserController : ControllerBase
{
    [EnableCors("DefaultPolicy")]
    [HttpGet]
    public async Task<IActionResult> Login(
        [FromBody] UserLoginData user,
        [FromServices] IUserService service
    )
    {
        var logged = await service.GetByLogin(user.Login);

        // if(logged.Password != user.Password)
        // return

        return Ok();
    }

    [EnableCors("DefaultPolicy")]
    [HttpPost]
    public async Task<IActionResult> Create(
        [FromBody] UserCreateData user,
        [FromServices] IUserService service
    )
    {
        Console.WriteLine("Cheguei");
        await service.Create(user);
        return Ok("Usuario Cadastrado com sucesso");
    }
}
