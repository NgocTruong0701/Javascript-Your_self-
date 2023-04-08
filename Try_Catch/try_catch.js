let a = 100; let b = 'a';

try{
    console.log(a / b);
    console.log(c); // Lỗi ngoại lệ ở đây (in ra 1 biến chưa được định nghĩa)
}catch(e){
    console.log('Loi say ra: ' + e);
}

try{
    console.log(d);
}catch(e){
    console.log('Co loi: ' + e);
}finally{
    console.log('Hoan thanh chuong trinh');
}

// try {
//     setTimeout(function() {
//     console.log(g)
//  }, 1000);
//  } catch (e) {
//     console.log("Không xử lý được!");
//  } Không thể xử lý bởi vì try...catch không thể xử lý ngoại lệ với các đoạn mã có cài đặt thời gian thực hiện. Bởi vì trình biên dịch sẽ
// rời khỏi khối lệnh try...catch và hàm kia thì sẽ được thực thi sau đó. Vì vậy ta phải bắt ngoại lệ đoạn mã bên trong hàm set thời gian.

setTimeout(function() {
    try {console.log(g);
    } catch {
    console.log("Xử lý lỗi!");
    }
}, 1000);




