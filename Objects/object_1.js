function sinh_vien (name, age){
    this.ten = name;
    this.tuoi = age;
}

let sv = new sinh_vien('Le Ngoc Truong', 20);
console.log(sv);

//let sv_new_3 = new sinh_vien_new('Hoang Thi A', 26); --> Lỗi do lớp không có cơ chế hoisting như khai báo hay function  

class sinh_vien_new {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    get getName() {
        return this.name;
    }

    set setName(name) {
        this.name = name
    }

    get getAge() {
        return this.age;
    }

    set setAge(age) {
        this.age = age;
    }

    in_Thong_Tin = function(){
        return `Tên: ${this.name}, tuổi: ${this.age} \n`;
    }
}

let sv_new_2 = new sinh_vien_new('Hoang Thi A', 25);
console.log(sv_new_2)
console.log(sv_new_2.in_Thong_Tin());

sv_new_2.setName = 'Lê Ngọc Trường';
sv_new_2.setAge = 20;
console.log(sv_new_2.getName);
console.log(sv_new_2.getAge);

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Nhap mat khau: ', (answer) => {
  let a = parseInt(answer);
  // rest of your code here
  rl.close();
});

