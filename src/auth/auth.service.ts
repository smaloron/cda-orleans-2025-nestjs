// auth/auth.service.ts

import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService
  ) {}

  async validateUser(
    username: string,
    pass: string
  ): Promise<any>
  {
    return this.userService
      .validateUser(username, pass);
  }

  async login(user: any)
  {
    const payload = {
      username: user.username, sub: user._id
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(
    username: string, password: string)
  {
    return this.userService.create(username, password);
  }
}