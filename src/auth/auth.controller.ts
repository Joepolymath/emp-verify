import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('signup')
  async signup(@Body() userData: any) {
    console.log({ body: userData });
    return await this.authService.signup(userData);
  }

  @Post('signin')
  signin() {
    return this.authService.signin();
  }
}
