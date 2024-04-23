/* eslint-disable prettier/prettier */
import { Controller, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Post()
  register() {
    return 'register';
  }
  @Post('login')
  login() {
    return 'Login';
  }
}
