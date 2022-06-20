/*
 * @Author        vacrain
 * @CreateDate    2022-06-19
 * @LastEditor    vacrain
 * @lastEditDate  2022-06-19
 * @RelativePath  /demos/nest-001/src/main.ts
 * @Description
 */
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Album example')
    .setDescription('The Album API description')
    .setVersion('1.0')
    .addTag('xxx')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
