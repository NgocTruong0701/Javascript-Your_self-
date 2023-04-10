/**
 * 2.
 */
const st = {
  name: 'Son Tung',
  greeting() {
    setTimeout(function () {
      console.log('Hello, I am ' + this.name)
    }, 100);
  }
}
st.greeting() // ? 'undifined'
//
const mtp = {
  name: 'MTP',
  greeting: (cb) => {
    setTimeout(() => {
      this.name = 'Fake MTP :)'
      console.log('Hello, I am ' + this.name)
      cb()
    }, 100)
  },
}
mtp.greeting(() => {
  console.log(mtp.name)
})
// 