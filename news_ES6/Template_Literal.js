// sử dụng cho chuỗi kí tự
const a = 'Anh ay noi: \'Toi mai ben anh ay\'';
const b = `Anh ay noi: 'Toi mai ben anh ay'`;

console.log(a);
console.log(b);

// sử dụng Template Literal cho nhiều chuỗi kí tự
const a2 = 'Lập trình JavaScript\n' +
' căn bản'
console.log(2);

const b2 = `Lập trình JavaScript
căn bản`
console.log(b2);

// Sử dụng Template Literal để nối chuỗi
// Trước JavaScript ES6, ta sẽ sử dụng toán tử + để nối các biến và biểu thức trong một chuỗi.
const a3 = 'Lập trình JavaScript';
console.log(a3 + ' căn bản');
const b3 = 'Lập trình JavaScript';
console.log(`${b3} căn bản`);

// Tagged Templates
function vi_du(a) {
    return a;
}
const d = vi_du('JavaScript');
console.log(d);

function vi_du(a) {
    return a;
}
const d2 = vi_du`JavaScript`;
console.log(d2);

const v = 'JavaScript';
function vi_du(strings, val) {
    let str0 = strings[0];
    let str1 = strings[1];
    return `${str0}${val}${str1}`;
}
const c = vi_du`Lập trình ${v}`;
console.log(c);