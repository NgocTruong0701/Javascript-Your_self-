const a = 1990/0; 
console.log(a); // +infinity --> vo cuc duong
const b = -100/0;
console.log(b); // -infinity --> vo cuc am
const c = "JS"/100; // NaN
console.log(c);

console.log(typeof 100);

let d = 100.324234;
console.log(d.toString(16));

let e = 12.2314214


console.log(e.toFixed(3)); // 12.231
console.log(e.toPrecision(3)); // 12.2 --> 1 2 2 là có 3 số 

console.log(parseInt(e.toFixed(3)) + d);

let f = Symbol('Hello');
console.log(Symbol.description); // lấy ra được giá trị của biến 

// Khi cộng 1 số với 1 chuỗi thì số luôn được convert thành chuỗi để ghép
// Khi trừ 1 số vs 1 chuỗi, hoặc 2 chuỗi thì luôn được convert thành số để thực hiện tính toán.

console.log('1' + '2'); // 12 --> ghep
console.log('2' - '1'); // 1 --> la so. 
console.log(10 + true); // 11 --> la so
console.log(10 + false); // 10 --> la so
console.log(10 - true); // 9 --> la so
console.log('100' - 'ab'); // NaN
console.log(10 + '3'); // 13 --> ghep chu
console.log('10' - 2); // 8 --> la so
console.log(10 + null); // 10
console.log(10 + undefined); // NaN

// Ta cũng có thể tạo các số từ các chuỗi bằng cách sử dụng phương thức Number(), parseInt(), parseFloat(), toán tử một ngôi +
// và phương thức Math.floor().
let num;
num = Number('100');
console.log(num); // 100 -> số
num = parseInt('110');
console.log(num); // 110 -> số
num = parseFloat('110.5');
console.log(num); // 110.5 -> số
num = + '100';  
console.log(num); // 100 -> số
num = Math.floor('100.5');
console.log(num); // 100.5 -> số
