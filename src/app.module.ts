import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CompanyModule } from './company/company.module';
import { EmployeesModule } from './employees/employees.module';
import { PrismaModule } from './database/prisma.module';

@Module({
  imports: [AuthModule, CompanyModule, EmployeesModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
