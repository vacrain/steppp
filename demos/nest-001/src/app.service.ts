/*
 * @Author        vacrain
 * @CreateDate    2022-06-19
 * @LastEditor    vacrain
 * @lastEditDate  2022-06-19
 * @RelativePath  /demos/nest-001/src/app.service.ts
 * @Description
 */
import { Injectable } from '@nestjs/common';
import { CreateAlbumDto } from 'dto/create-album.dto';
import { Album } from 'entities/album.entity';

@Injectable()
export class AppService {
  private readonly albums: Album[] = [
    { id: 1, name: 'aaa' },
    { id: 2, name: 'bb' },
  ];

  findAll(): Album[] {
    return this.albums;
  }

  findOne(id: number): Album {
    return this.albums.find((album) => album.id === id);
  }

  create(album: CreateAlbumDto): Album {
    const newAlbum = { id: Date.now(), ...album };
    this.albums.push(newAlbum);
    return newAlbum;
  }

  getHello(): string {
    return 'Hello World!';
  }
}
