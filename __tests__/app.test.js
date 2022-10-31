const request = require('supertest');
const app = require('../lib/app');
const { cats } = require('../lib/cats-data');

describe('cat routes', () => {
  it('/cats should return a list of cats', async () => {
    const res = await request(app).get('/cats');
    const expected = cats.map((cat) => {
      return { id: cat.id, name: cat.name };
    });
    expect(res.body).toEqual(expected);
  });

  it('/cats/1 should return details about Felix', async () => {
    const res = await request(app).get('/cats/1');
    expect(res.body).toEqual({
      id: '1',
      name: 'Felix',
      type: 'Tuxedo',
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Felix_the_cat.svg/200px-Felix_the_cat.svg.png',
      year: 1892,
      lives: 3,
      isSidekick: false,
    });
  });
});
