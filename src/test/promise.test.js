const getPromise = require('../promise.js')

describe('promise test', () => {
  it('async - await ', async () => {
    const result = await getPromise('success');
    expect(result).toEqual({
      key: 'promiseKey',
      value: true,
    });
  })

  it('then' , () => {
    getPromise('success').then((value) => {
      expect(value).toEqual({
        key: 'promiseKey',
        value: true,
      })
    })
  })

  it('catch', () => {
    getPromise('error').catch((err) => {
      expect(err).toBe('error')
    });
  })

  it('resolves', () => {
    expect(getPromise('success')).resolves.toEqual({
      key: 'promiseKey',
      value: true
    })
  })

  it('rejects', () => {
    expect(getPromise('erro')).rejects.toBe('d')
  })
});
