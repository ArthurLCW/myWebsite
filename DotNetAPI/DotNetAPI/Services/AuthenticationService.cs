using DotNetAPI.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using System.Security.Cryptography;
using DotNetAPI.Interfaces;
using DotNetAPI.Repositories;

public class AuthenticationService
{
    private readonly IConfiguration _configuration;

    public AuthenticationService(IConfiguration configuration)
    {
        _configuration = configuration;
    }

    public string HashPassword(string password)
    {
        using (var sha256 = SHA256.Create())
        {
            var bytes = Encoding.UTF8.GetBytes(password);
            var hash = sha256.ComputeHash(bytes);

            return BitConverter.ToString(hash).Replace("-", "").ToLowerInvariant();
        }
    }

    public string GenerateJwtToken(string username)
    {
        var claims = new[]
        {
            new Claim(JwtRegisteredClaimNames.Sub, username),
            new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
        };

        var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]));
        var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

        var token = new JwtSecurityToken(
            issuer: _configuration["Jwt:Issuer"],
            audience: _configuration["Jwt:Audience"],
            claims: claims,
            expires: DateTime.Now.AddHours(2),
            signingCredentials: creds);

        return new JwtSecurityTokenHandler().WriteToken(token);
    }

    public string VerifyPasswordGenerateToken(string username, string inputPassword, string storedHash)
    {
        var hashedInputPassword = HashPassword(inputPassword);

        if (hashedInputPassword.Equals(storedHash, StringComparison.OrdinalIgnoreCase))
        {
            return GenerateJwtToken(username);
        }
        return null;
    }

    private TokenValidationParameters GetValidationParameters()
    {
        return new TokenValidationParameters
        {
            ValidateIssuerSigningKey = true,
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:Key"])),
            ValidateIssuer = false,
            ValidateAudience = false,
            ClockSkew = TimeSpan.Zero
        };
    }

    public string GetUserByToken(string token)
    {
        string authenticatedName = "Visitor";
        if (string.IsNullOrEmpty(token))
        {
            return authenticatedName;
        }
        var tokenHandler = new JwtSecurityTokenHandler();
        var validationParameters = GetValidationParameters();
        tokenHandler.ValidateToken(token, validationParameters, out SecurityToken validatedToken);

        var jwtToken = (JwtSecurityToken)validatedToken;
        authenticatedName = jwtToken.Claims.First(x => x.Type == "sub").Value;
        return authenticatedName;
    }
}
