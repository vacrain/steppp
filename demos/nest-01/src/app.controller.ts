/*
 * @Author        vacrain
 * @CreateDate    2022-06-19
 * @LastEditor    vacrain
 * @lastEditDate  2022-06-21
 * @RelativePath  /demos/nest-01/src/app.controller.ts
 * @Description
 */
import { BadRequestException, Body, Controller, Get, HttpCode, Param, Post } from '@nestjs/common'
import {
  ApiBadGatewayResponse,
  ApiNoContentResponse,
  ApiOkResponse,
  // ApiResponse,
  ApiTags,
} from '@nestjs/swagger'
// import { create } from 'domain';
import { CreateAlbumDto } from 'src/dto/create-album.dto'
import { Album } from 'src/entities/album.entity'
import { AppService } from './app.service'

// @Controller('/bbb')
// 会在swagger页面中显示标签标题
@ApiTags('albums')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/getList')
  getList(): Album[] {
    return this.appService.findAll()
  }

  @Get('/getList1')
  getList1(): Album[] {
    return this.appService.findAll()
  }

  @ApiOkResponse({ type: Album, isArray: true })
  @Get(':id')
  getOne(@Param('id') id: string): Album {
    return this.appService.findOne(Number(id))
  }

  // @ApiResponse({ status: 201, description: 'create ok' })
  @ApiNoContentResponse({ type: Album })
  @ApiBadGatewayResponse() // 显示code为502
  @HttpCode(204)
  @Post()
  async create(@Body() createAlbumDto: CreateAlbumDto) {
    if (!createAlbumDto.name) {
      throw new BadRequestException()
    }
    return this.appService.create(createAlbumDto)
  }

  // @Get(['a', 'b'])
  @Get(':msg')
  getHello(@Param('msg') msg: string): string {
    // return this.appService.getHello();
    return msg
  }
}
