function getPromise() {
  const result  = new Promise({
    key: 'promiseKey',
    value: true,
  })


  return result
}

module.exports = getPromise;