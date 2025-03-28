﻿using InterviewPrep.Core.DTOs.General;
using InterviewPrep.Core.DTOs.Identity.Login;
using InterviewPrep.Core.DTOs.Identity.Register;
using Microsoft.AspNetCore.Identity;

namespace InterviewPrep.Core.Interfaces;
public interface IAuthService
{
    Task<LoginServiceResponseDto> Login(Login login);
    Task<GeneralServiceResponseDto> Register(Register user);

}
