using System;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace back.Services;

public class SecurityService : ISecurityService
{
    public Task<string> GenerateJwt<T>(T obj)
    {
        throw new System.NotImplementedException();
    }

    public async Task<string> GenerateSalt()
    {
        var saltBytes = getRandomArray();
        var base64salt = Convert.ToBase64String(saltBytes);
        return base64salt;
    }

    public async Task<string> HashPassword(string password, string salt)
    {
        var saltBytes = Convert.FromBase64String(salt);
        var passwordBytes = Encoding.UTF8.GetBytes(password);
        var hashBytes = getHash(saltBytes, passwordBytes);
        var hash = Convert.ToBase64String(hashBytes);

        return hash;
    }

    public async Task<T> ValidateJwt<T>(string jwt)
    {
        throw new NotImplementedException();
    }

    private Task getPassword()
    {
        throw new NotImplementedException();
    }

    private byte[] getHash(byte[] saltBytes, byte[] passwordBytes)
    {
        const int iterationsCount = 1000;
        using var hashAlgorithm = new Rfc2898DeriveBytes(
            passwordBytes,
            saltBytes,
            iterationsCount,
            HashAlgorithmName.SHA256
        );
        var hashBytes = hashAlgorithm.GetBytes(32);
        return hashBytes;
    }

    private byte[] getRandomArray()
    {
        byte[] randomBytes = new byte[24];
        Random.Shared.NextBytes(randomBytes);
        return randomBytes;
    }
}
