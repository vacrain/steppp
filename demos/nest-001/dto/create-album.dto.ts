import { ApiProperty } from '@nestjs/swagger';

/*
 * @Author        vacrain
 * @CreateDate    2022-06-19
 * @LastEditor    vacrain
 * @lastEditDate  2022-06-19
 * @RelativePath  /demos/nest-001/dto/create-album.dto.ts
 * @Description
 */
export class CreateAlbumDto {
  @ApiProperty({ description: 'name of album', type: 'string' })
  name: string;
}
