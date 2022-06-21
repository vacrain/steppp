/*
 * @Author        vacrain
 * @CreateDate    2022-06-21
 * @LastEditor    vacrain
 * @lastEditDate  2022-06-21
 * @RelativePath  /demos/nest-01/src/user/user.service.ts
 * @Description
 */
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { User } from '../entities/user.entity'

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.query('select * from user')
  }

  // findOne(id: number): Promise<User> {
  //   return this.userRepository.findOne(id)
  // }

  // async remove(id: number): Promise<void> {
  //   await this.userRepository.delete(id)
  // }
}
