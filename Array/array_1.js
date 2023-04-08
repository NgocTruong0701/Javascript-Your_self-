let array_1 = [1,2,3,4];
let array_2 = new Array('1', '2', '3');
let array_3 =  [1, 2, '3', '4', true, false];
let array_4 = [
    [1,'2', true],
    {name:'Truong', age: 20},
    function(){
        console.log('funtion in array')
    }
]

for(let i = 1; i <= 4; i++){
    console.log(eval(`array_${i}`));
}

console.log(array_1[0]); // 1

let a = array_1.push(5);
console.log(array_1, a); // [1,2,3,4,5] 5

let b = array_1.unshift(0);
console.log(array_1, b); // [0,1,2,3,4,5] 6

array_1[0] = -1;
console.log(array_1); // [-1,1,2,3,4,5,]

let c = array_1.pop();
console.log(array_1, c); // [-1,1,2,3,4] 5
let d = array_1.shift();
console.log(array_1, d); //[1,2,3,4] -1

console.log(array_1.length); // 4

let f = array_1.sort(function(arr1, arr2){ // sort được định nghĩa hàm so sánh giảm dần
    return arr2 - arr1;
})
console.log(array_1, f); //[4,3,2,1][4,3,2,1]

let e = array_1.sort(); // mặc định tăng dần, trả về mảng mới được sắp xếp
console.log(array_1, e); // [1,2,3,4][1,2,3,4]

let g = array_1.slice(1,3); //--> lấy ra 1 phần của mảng từ [start, end). có thể dùng index âm, lúc này nó sẽ là phần bù từ cuối mảng
let h = array_1.slice(-3,-1);
console.log(g); // [2,3] 
console.log(h); // [2,3]

let i = array_1.splice(2,2); // xóa 2 phần tử từ vị trí index là 2 [3,4] và trả về mảng các phần tử bị xóa
console.log(i, array_1);
let k = array_1.splice(0,0,6,7); // tại vị trí index là 0 xóa 0 phần tử và thêm phần tử có giá trị là 6 và 7 vào tại vị trí index là 0,
// vẫn trả về các phần tử bị xóa
console.log(k, array_1); 
