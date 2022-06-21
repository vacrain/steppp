/*
 * @Author        vacrain
 * @CreateDate    2022-06-21
 * @LastEditor    vacrain
 * @lastEditDate  2022-06-21
 * @RelativePath  /demos/nest-01/src/entities/user.entity.ts
 * @Description
 */
import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm'

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: 'varchar', name: 'name' })
  name: string
}
