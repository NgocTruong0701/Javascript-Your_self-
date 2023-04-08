function sinh_vien(){
    this.name = 'Truong',
    this.id = 100;
}

let sv = new sinh_vien();
console.log(sv);

class SinhVien {
    constructor(name, age, address){
        this.name = name;
        this.age = age;
        this.address = address;
    }

    in_thong_tin() {
        console.log(`Sinh vien: ${this.name}, ${this.age}, ${this.address}`);
    }


}

const sv1 = new SinhVien('Sinh Vien 1', 20, "HN");
const sv2 = new SinhVien('Sinh vien 2', 21, 'TH');

console.log(sv1);
console.log(sv2);
sv1.in_thong_tin();
sv2.in_thong_tin();
console.log(typeof SinhVien);
