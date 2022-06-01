import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { HttpExceptionFilter } from './core/filter/http-exception.filter';
import { TransformInterceptor } from './core/interceptor/transform.interceptor';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api'); // 设置全局路由前缀

  const swaggerOptions = new DocumentBuilder()
    .setTitle('nest-swagger')
    .setDescription('growth-memory-map')
    .setVersion('1.0')
    .addBasicAuth()
    .build();

  const document = SwaggerModule.createDocument(app, swaggerOptions);
  SwaggerModule.setup('doc', app, document);

  app.useGlobalFilters(new HttpExceptionFilter()); // 注册全局错误的过滤器
  app.useGlobalInterceptors(new TransformInterceptor()); // 全局注册拦截器
  await app.listen(3000);
}
bootstrap();
