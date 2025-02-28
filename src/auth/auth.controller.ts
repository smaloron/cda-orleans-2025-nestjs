// auth/auth.controller.ts

import { Controller, Post, Body,
  Request, UseGuards
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService
  ) {}

  @Post('register')
  async register(@Body() body) {
    return this.authService
      .register(body.username, body.password);
  }

  @Post('login')
  async login(@Body() body) {
    return this.authService.login(body);
  }

  @Post('protected')
  @UseGuards(JwtAuthGuard)
  getProtectedResource(@Request() req) {
    return {
      message: 'Vous avez accès !',
      user: req.user
    };
  }
}