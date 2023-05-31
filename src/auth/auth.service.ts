import { Injectable } from '@nestjs/common';
import { AuthRepository } from './auth.repository';

@Injectable({})
export class AuthService {
  constructor(private authRepository: AuthRepository) {}
  async signup(payload: any) {
    console.log({ payload });
    const dataForPrisma = {
      data: payload,
    };
    const data = await this.authRepository.createUser(dataForPrisma);
    return {
      message: 'Sign up',
      data,
    };
  }

  signin() {
    return {
      message: 'Sign in',
    };
  }
}
