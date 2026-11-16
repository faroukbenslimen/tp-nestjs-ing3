import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule} from '@nestjs/swagger';
import { ConfigService} from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
  
  });
  
  const config = new DocumentBuilder()
    .setTitle('Travel API')
    .setDescription('The Travel API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  const configService =app.get(ConfigService);
  const port =Number(configService.get<string>('PORT') ?? '3000');

  await app.listen(port);
  console.log(`Application running on http://localhost:${port}/travel`);}
bootstrap();