import supertest from 'supertest';
import { describe, expect } from '@jest/globals';
import { createServer } from '../src/server/server';

const app = createServer();

describe('server routes', () => {
  it('should be able to access home route', async () => {
    const { statusCode } = await supertest(app).get(`/`);
    expect(statusCode).toBe(200);
  });
});
