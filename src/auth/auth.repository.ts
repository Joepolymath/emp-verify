import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class AuthRepository {
  constructor(private prisma: PrismaService) {}

  async createUser(params: { data: Prisma.UserCreateInput }): Promise<User> {
    console.log('This is the data');
    console.log({ params });
    const { data } = params;
    return await this.prisma.user.create({ data });
  }
}
