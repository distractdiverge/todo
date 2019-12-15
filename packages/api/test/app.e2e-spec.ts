import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from './../src/app.module';
import {
  NestFastifyApplication,
  FastifyAdapter,
} from '@nestjs/platform-fastify';

describe('AppController (e2e)', () => {
  let app: NestFastifyApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication<NestFastifyApplication>(
      new FastifyAdapter(),
    );
    await app.init();
  });

  afterEach(async () => {
    await app.close();
  });

  it('GET /', () =>
    app
      .inject({
        method: 'GET',
        url: '/',
      })
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.payload).toMatchInlineSnapshot(`"Hello World!"`);
      }));

  it('GET /foo', () =>
    app
      .inject({
        method: 'GET',
        url: '/foo',
      })
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.payload).toMatchInlineSnapshot(
          `"{\\"foo\\":\\"buzz\\"}"`,
        );
      }));
});
