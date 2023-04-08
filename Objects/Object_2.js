const sinhvien = {

    // Các phương thức của đối tượng, bao gồm 1 cặp khóa : value --> thuộc tính
    name : 'Truong',
    age : 20,
    address : 'Thanh Hoa',

    // Đối tượng lồng đối tượng
    cmt : {
        id : 2020601391,
        date : '20/10/2023'
    },

    // Phương thức của đối tượng
    phuongthuc : function(){
        console.log('Ten la: ' + this.name);
    }
}

console.log(typeof sinhvien);
console.log(sinhvien.name);
console.log(sinhvien["age"]);

console.log(sinhvien.cmt);
sinhvien.phuongthuc();