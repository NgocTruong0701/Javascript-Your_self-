// Arrow Function
let phepChia = function (a, b) {
    return a + b;
}
// --> convert to Arrow Funtion
let phepChiaNew = (a, b) => a + b;

console.log(phepChia(1, 2));
console.log(phepChiaNew(1, 2));

// Destructuring object
const person = {
    name: 'John',
    age: 30,
    address: {
        city: 'New York',
        country: 'USA'
    }
};

const { name, age, address: { city, country } } = person;
console.log(name); // John
console.log(age); // 30
console.log(city); // New York
console.log(country); // USA

const arr = [1, 2, 3];

// Destructuring array
const [a, b, c] = arr;
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3


// Giá trị mặc định của tham số
function phep_chia(a, b = 5) {
    console.log(a / b);
}
phep_chia(10); // khi này a = 10, b mặc định là 5
phep_chia(4, 2); // Khi này a = 4, b gán bằng 2

//Export - Import JS
import {phepNhan} from './exportFunction.mjs';
console.log(phepNhan(2, 4)); //8

// Các tham số và toán tử Spread
// Truyền nhiều đối số vào 1 hàm
function myFunction(x,y,z){
    console.log(x, y, z);
}

const args = [1,2,3];
myFunction(...args); //Log [1,2,3]

// truyền nhiều tham số vào 1 hàm không xác định dưới dạng 1 mảng
function myFunction2(a, b, ...arr){
    console.log(a);
    console.log(b);

    console.log(arr);
}
myFunction2("JS", "JAVA", "C#", "C++", "Pascal");

// sao chép một mảng
const args2 = [...args]; // creates a copy of args
console.log(args2);

// kết hợp 2 mảng
const arr2 = ["Hello", "Everyone"];
const result = [...args2, ...arr2];
console.log(result);

// Toán thử Spread cũng có thể mở rộng đối tượng
const obj1 = { foo: 'bar', x: 42 };
const obj2 = { foo: 'baz', y: 13 };
const mergedObj = { ...obj1, ...obj2 }; // { foo: 'baz', x: 42, y: 13 }
console.log(mergedObj);