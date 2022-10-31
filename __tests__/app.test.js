const request = require('supertest');
const app = require('../lib/app');
const { cats } = require('../lib/cats-data');

describe('cat routes', () => {
  it('/cats should return a list of cats', async () => {
    const res = await request(app).get('/cats');
    console.log(res);
    const expected = cats.map((cat) => {
      return { id: cat.id, name: cat.name };
    });
    expect(res.body).toEqual(expected);
  });
});
