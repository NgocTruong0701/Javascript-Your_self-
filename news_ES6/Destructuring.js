const sinhvien = {
    name: 'Nam',
    age: 20,
}

// let {name, age} = sinhvien; // gán các thuộc tính dễ dàng
// // console.log(name); // Nam
// // console.log(age); // 20

// Chú ý các thứ tự các tên không quan trọng khi thực hiện phép gán Destructuring cho biến kiểu Object
// Đặc biệt cần dùng tên biến gán cùng với tên khóa thuộc tính
// let {age, name} = sinhvien;
// console.log(name); // Nam
// console.log(age); // 20
// Muốn gán vào 1 biến tên khác với khóa của thuộc tính object thì:
let {name: a, age: b} = sinhvien;
console.log(a); // Nam
console.log(b); // 20

const array = [1,2,3];
let [value1, value2, value3] = array;
console.log(value1); // 1
console.log(value2); // 2
console.log(value3); // 3

// Ngoài ra ta có thể gán giá trị mặc định cho mảng và object
let [va1, va2, va3, va4 = 5] = array;
console.log(va1); // 1
console.log(va2); // 2
console.log(va3); // 3
console.log(va4); // 5 - giá trị mặc định được gán

let {id = 10, name, age} = sinhvien
console.log(id); // 10 - giá trị mặc định được gán
console.log(name);
console.log(age);

// hoán đổi biến
let b1 = 100;
let b2 = 200;
[b1, b2] = [b2, b1] // Hoán đổi biến cho nhau
console.log(b1); // 200
console.log(b2); // 100

// Bỏ qua phần tử trong mảng or array
let {name: c, } = sinhvien // bỏ qua phần tử age để gán thông qua dấu ,
console.log(c); // Nam

let[v1, ,v3] = array; // bỏ qua phần tử thứ 2 để gán phần tử thứ 3 trong mảng
console.log(v1); // 1
console.log(v3); // 3

// Gán các phần tử còn lại cho 1 biến Spread
const [value, ...values] = array; // 1 biến Spread thì sau nó sẽ không có dấu "," vì vậy gán nó phải ở sau cùng, nếu đầu sẽ lỗi
console.log(value); //1
console.log(values); // [2,3]

// gán destructuring lồng nhau dùng key:{} hoặc [] trong phép gán
const sinhvienNew = {
    ma: 1,
    ten: 'Truong',
    address: {
        xa: 'Vinh an',
        huyen: 'Vinh loc', 
        tinh: 'Thanh hoa'
    }
};

const {ma, ten, address: {xa, huyen, tinh}} = sinhvienNew 
console.log(ma); // 1
console.log(ten) // Truong
//console.log(address); // loi
console.log(xa); // Vinh an
console.log(huyen); // Vinh loc
console.log(tinh); // Thanh hoa

const num = [9, 8, [7, 6], 5];
const [num1, num2, [num3, num4], num5] = num;
console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);
console.log(num5);