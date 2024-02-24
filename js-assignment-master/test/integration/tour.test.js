const request = require('supertest');
const { app } = require('../../index');

describe('Integration Tests', () => {
  let server;

  beforeAll((done) => {
    server = app.listen(done);
  });

  afterAll((done) => {
    server.close(done);
  });

  it('should return a 200 OK status code for GET request to /tour/matches?matche_id=1', async () => {
    const response = await request(server).get('/tour/matches?match_id=1');
    expect(response.status).toBe(200);
  });

});