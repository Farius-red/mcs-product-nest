import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('productos api ')
    .setDescription('Manejo de productos y ventas')
    .setVersion('1.0')
    .addTag('productos')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  // Habilitar CORS
  app.enableCors({
    origin: 'http://localhost:4200', // Aquí colocas el origen que deseas permitir
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Métodos permitidos
    credentials: true, // Permitir cookies
  });

  await app.listen(3000);
}
bootstrap();
