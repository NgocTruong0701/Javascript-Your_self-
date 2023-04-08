const sinhvien = {
    ten: 'Truong', // 2 cái này là thuộc tính dữ liệu
    tuoi: 20,

    get getTen(){ // Có thể truy cập giống như 1 thuộc tính. Đây là thuộc tính truy cập
        return this.ten;
    },

    set setTen(ten){
        this.ten = ten;
    }
}

console.log(sinhvien.ten);
console.log(sinhvien.getTen);
//console.log(sinhvien.getTen()); -> có lỗi sảy ra, getTen is not a function
sinhvien.setTen = 'Le Ngoc Truong';
//sinhvien.setTen('Le Ngoc Truong'); -> có lỗi, setTen is not a function
console.log(sinhvien.getTen);

// Use Object.defineProperty()
const person = {
    name: 'Le Ngoc Truong'
};

Object.defineProperty(person, "getTen", {
    get: function(){
        return this.name;
    }
});

Object.defineProperty(person, "setTen", {
    set: function(name){
        this.name = name;
    }
});

console.log(person.getTen);
person.setTen = 'Truong';
console.log(person.getTen);