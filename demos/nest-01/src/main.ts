/*
 * @Author        vacrain
 * @CreateDate    2022-06-19
 * @LastEditor    vacrain
 * @lastEditDate  2022-06-21
 * @RelativePath  /demos/nest-01/src/main.ts
 * @Description
 */
import { Logger } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  // const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter())

  const config = new DocumentBuilder()
    .setTitle('Album example')
    .setDescription('The Album API description')
    .setVersion('1.0')
    .addTag('xxx')
    .build()

  const document = SwaggerModule.createDocument(app, config)

  SwaggerModule.setup('api', app, document)

  const serverPort = 8080
  await app.listen(serverPort)

  // 默认情况下，`Fastify`仅在 `localhost 127.0.0.1` 接口上监听
  // 改成 0.0.0.0 接受其他主机上的连接
  // await app.listen(serverPort, '0.0.0.0')

  new Logger('swagger api地址').log(`http://localhost:${serverPort}/api`)
}
bootstrap()
