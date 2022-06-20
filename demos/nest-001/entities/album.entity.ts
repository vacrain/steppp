import { ApiProperty } from '@nestjs/swagger';

/*
 * @Author        vacrain
 * @CreateDate    2022-06-19
 * @LastEditor    vacrain
 * @lastEditDate  2022-06-20
 * @RelativePath  /demos/nest-001/entities/album.entity.ts
 * @Description
 */
export class Album {
  @ApiProperty()
  id: number;
  @ApiProperty()
  name: string;
}
