function getPromise(type) {
  const result  = new Promise((resolve, reject) => {
    if(type === 'success'){
    resolve({
      key: 'promiseKey',
      value: true,
    })}


    if(type === 'error') {
    reject(
      'error'
    )
    }
  })


  return result
}

module.exports = getPromise;