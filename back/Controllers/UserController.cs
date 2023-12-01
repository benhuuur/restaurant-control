using Microsoft.AspNetCore.Mvc;

namespace back.Controllers;

using System;
using Services;
using DTO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Identity;
using Trevisharp.Security.Jwt;
using System.Security.Cryptography;
using System.Text.Json.Serialization;
using System.Text.Json;

[ApiController] //Controlador da API
[Route("user")]
public class UserController : ControllerBase
{
    // [EnableCors("DefaultPolicy")]
    // [HttpPost("client")]
    // public async Task<IActionResult> ValidateClient(
    //     [FromBody] JwtData jwt,
    //     [FromServices] ISecurityService security,
    //     [FromServices] CryptoService crypto
    // )
    // {
    //     try
    //     {
    //         var data = jwt.data;
    //         crypto.Validate<string>(data);
    //         return Accepted(true);
    //     }
    //     catch (Trevisharp.Security.Jwt.Exceptions.JwtInvalidSignatureException)
    //     {
    //         return Unauthorized("Token is invalid or has already expired");
    //     }
    //     catch (Trevisharp.Security.Jwt.Exceptions.JwtInvalidPayloadException)
    //     {
    //         return Unauthorized("The payload was in the wrong format or was corrupted.");
    //     }
    //     catch (Trevisharp.Security.Jwt.Exceptions.JwtInvalidFormatException)
    //     {
    //         return Unauthorized("The token is not in the required x.y.z format");
    //     }
    // }

    // [EnableCors("DefaultPolicy")]
    // [HttpPost("adm")]
    // public async Task<IActionResult> ValidateAdm(
    //     [FromBody] JwtData jwt,
    //     [FromServices] IUserService service,
    //     [FromServices] ISecurityService security,
    //     [FromServices] CryptoService crypto
    // )
    // {
    //     try
    //     {
    //         var data = jwt.data;
    //         // crypto.Validate<string>(data);
    //         for (int i = 0; i < data.Split('.').Length; i++)
    //         {
    //             Console.WriteLine(data.Split('.')[i]);
    //         }

    //         var payload = JsonSerializer.Deserialize<UserLoginData>(
    //             Convert.FromBase64String(data.Split('.')[1])
    //         );
    //         return Accepted(true);
    //     }
    //     catch (Trevisharp.Security.Jwt.Exceptions.JwtInvalidSignatureException)
    //     {
    //         return Unauthorized("Token is invalid or has already expired");
    //     }
    //     catch (Trevisharp.Security.Jwt.Exceptions.JwtInvalidPayloadException)
    //     {
    //         return Unauthorized("The payload was in the wrong format or was corrupted.");
    //     }
    //     catch (Trevisharp.Security.Jwt.Exceptions.JwtInvalidFormatException)
    //     {
    //         return Unauthorized("The token is not in the required x.y.z format");
    //     }
    // }

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
