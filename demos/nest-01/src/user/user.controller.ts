/*
 * @Author        vacrain
 * @CreateDate    2022-06-19
 * LastEditor    vacrain
 * lastEditDate  2022-06-21
 * RelativePath  /demos/nest-01/src/user.controller
 * @Description
 */

import { Controller, Get } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { UserService } from './user.service'
import { User } from '../entities/user.entity'

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('list')
  findAll(): Promise<User[]> {
    return this.userService.findAll()
  }
}
