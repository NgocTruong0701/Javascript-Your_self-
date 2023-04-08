/**
 * 2. Promisify đoạn code sau
 * 3. Tương tự, chuyển đoạn code dưới thành dạng phẳng sử dụng async await
 */
/** 
 * @param {number} input 
 * @param {(err: Error, data: number) => any} cb 
 */
function getData(input, cb) {
  setTimeout(() => {
    if (typeof input !== 'number') return cb(new Error('Input is invalid'))
    cb(null, input + Math.round(Math.random() * input))
  }, 1000)
}

getData(10, (err, data) => {
  if (err) return console.error(err)
  getData(data, (err, data) => {
    if (err) return console.error(err)
    getData(data, (err, data) => {
      if (err) return console.error(err)
      console.log('Done:', data)
    })
  })
})