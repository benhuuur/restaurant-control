using Microsoft.AspNetCore.Mvc;

namespace back.controllers;

using System;
using DTO;

[ApiController] //Controlador da API
[Route("user")]
public class UserController : ControllerBase
{
    [HttpGet]
    public IActionResult Login([FromBody] UserLoginData user)
    {
        throw new NotImplementedException();
    }

    [HttpPost]
    public IActionResult Create([FromBody] UserCreateData user) 
    {
        throw new NotImplementedException();
     }
}
