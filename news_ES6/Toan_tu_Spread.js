const a = ['Lập trình', 'JavaScript', 'căn bản'];
console.log(a);
console.log(...a); // Tương đương với console.log('Lập trình', 'JavaScript', 'căn bản');

// Sao chép mảng
const c = [143, 543];
const b = [...c, 231, 423, 123];
console.log(b); // [ 143, 543, 231, 423, 123 ]

// Copy mảng mới nguyên (copy các giá trị) chứ không dùng dạng tham chiếu
let d = a;
a.push('XML');
console.log(a);
console.log(d); // ở d cũng có sự thêm phần tử này

let e = [...a];
a.push('C#');
console.log(a);
console.log(e); // ở đây e không có sự thay đổi thêm phần tử vì e lúc này là 1 mảng riêng biệt với a.

const object1 = {
    id: 10,
    name: 'Nam'
};

const object2 = {
    email: '10@gmail.com'
}
// Dùng toán tử spread để thêm các thuộc tính
const object1and2 = {...object1, ...object2};
console.log(object1and2); // { id: 10, name: 'Nam', email: '10@gmail.com' }

// Truyền tham số bằng Spread
let vidu = function(...args){
    console.log(args);
}
vidu('Lap trinh'); // [ 'Lap trinh' ]
vidu('Lap trinh', 'Javascript'); // [ 'Lap trinh', 'Javascript' ] --> không giới hạn đối số truyền vào khi dùng 
// toán tử spread trong tham số của hàm. Đây được gọi là Rest Parameter

// Truyền đối số bằng Spread -- chỉ chuyền mảng
let vidu2 = function(a, b, c) {
    console.log(a, b, c);
}

let words = ['Hello', 'Every', 'One', `!`];
vidu2(...words); // Hello Every One --> tự động chỉ nhận 3 đối số truyền vào hàm do hàm chỉ có 3 tham số bắt buộc.

