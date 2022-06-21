/*
 * @Author        vacrain
 * @CreateDate    2022-06-21
 * @LastEditor    vacrain
 * @lastEditDate  2022-06-21
 * @RelativePath  /demos/nest-01/src/user/user.module.ts
 * @Description
 */
import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserService } from './user.service'
import { UserController } from './user.controller'
import { User } from '../entities/user.entity'

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
