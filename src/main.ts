import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // const app = await NestFactory.createMicroservice<MicroserviceOptions>(
  //   AppModule,
  //   {
  //     transport: Transport.REDIS,
  //     options: {
  //       url: 'redis://localhost:6379',
  //     },
  //   },
  // );
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
