// user.module.ts
import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
@Module({
  imports: [],
  providers: [UserService],
  controllers: [UserController], // add user controller
})
export class UserModule {}
