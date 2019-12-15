import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { 
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  app.setGlobalPrefix('api');
  // TODO: Allow listening on 0.0.0.0 instead of just 127.0.0.1 for docker
  await app.listen(5000);
}

// TODO: Trigger launch of bootstrap only if this file is run directly
bootstrap();
