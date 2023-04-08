class SinhVien {
    constructor(name, age, address){
        this.name = name;
        this.age = age;
        this.address = address;
        console.log(this);
    }

    in_thong_tin = function(){
        console.log(`${this.name}, ${this.age}, ${this.address}`);
    }
}

class SinhVienLuat extends SinhVien{
    constructor(name, age, address, dh){
        super(name,age,address);
        this.dh = dh;
        console.log(this);
    }
}

const sv = new SinhVien('Le Ngoc Truong', 20, 'Thanh Hoa');
const svl = new SinhVienLuat('Nguyen Huong Giang', 20, 'Thai Binh', 'DH Luat');


class Persion {
    constructor(name, age, address){
        this.name = name;
        this.age  = age;
        this.address = address
        this.cmt = function() {
            console.log(this.name);
            hello = function(){
                console.log(this.name); // undefine do this lúc này là toàn cục (windows)
            }
        }
    }
}

const persion = new Persion('A', 20, 'TH');
console.log(persion.cmt.hello);

const vi_du = () => {
    console.log(this);
}
vi_du(); // {} function đó

let sinh_vien = {
    ID: 100,
    vi_du() {
        let vi_du2 = () => console.log(this.ID);
        vi_du2();
    }
}
sinh_vien.vi_du(); // 100
// Ở đây, this.ID bên trong hàm vi_du2() tham chiếu đến đối tượng sinh_vien.

const sinh_vien_2 = {
    ID: 100,
    vi_du() {
        console.log(this);
        console.log(this.ID);
        let vi_du2 = () => {
            console.log(this);
            console.log(this.ID);
        }
        vi_du2();
    }
}
sinh_vien_2.vi_du();

//Ở đây, vi_du2() được định nghĩa bằng cách sử dụng hàm mũi tên. Nó lấy this từ phạm vi cha của nó. Do đó, this.ID cho 100.