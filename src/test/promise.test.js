const promise = require('..promise')

describe('promise test', () => {
  it('async - await', async () => {
    const result = await promise();
    expect(result).toEqual({
      key: 'promiseKey',
      value: true,
    });
  })
});
