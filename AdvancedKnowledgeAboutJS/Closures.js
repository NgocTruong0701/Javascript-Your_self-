// Hàm lồng 
function vidu(){
    function vidu2(){
        console.log('Ví dụ 2');
    }
    vidu2();
}
vidu();

// Hàm trả về 1 hàm khác or 1 đối tượng
function returnFunction(){
    function vidu2(){
        console.log('Hàm được return');
    }
    return vidu2;
}
let a = returnFunction();
console.log(returnFunction);
console.log(a);
a()

// Closure là có quyền truy cập vào phạm vi bên ngoài của 1 hàm bởi 1 hàm lồng bên trong dù hàm bên ngoài đã đóng
function vidu_1(){
    function vidu_2(){
        return 'Co thể dùng function vidu_2 ngay cả khi vidu_1 đã được đóng';
    }
    return vidu_2;
}

let vd = vidu_1();
console.log(vd);
console.log(vd());

// Tính riêng tư của dữ liệu
let num = 0;
function phep_tinh(){
    function phepcong(){
        return num += 10;
    }
    return phepcong;
}
let pheptinh = phep_tinh(); // return ra hàm phepcong
console.log(pheptinh());
console.log(pheptinh());
console.log(pheptinh());
num += 200;
console.log(num); // 230 có nghĩa là ta có thể thay đổi giá trị của biến num kia từ bên ngoài hàm cũng đc. 
// Để không thể thay đổi hay truy cập biến num từ bên ngoài như này ta có thể dùng closure 

function useClosure() {
    let a = 0;
    function returnClosure() {
        return a += 10;
    }
    return returnClosure;
}

let containClosure = useClosure(); // lúc này nó sẽ return 1 function 
containClosure();
containClosure();
console.log(containClosure()); // 30. ta cũng k thể truy cập vào biến a nếu k dùng function useClosure
