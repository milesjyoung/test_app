const request = require('supertest');
const app = require('../../server/index');

describe('GET /api/hello', () => {
  it('should return a hello message', async () => {
    const res = await request(app).get('/api/hello');
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('Hello From Express');
  });
});