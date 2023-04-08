
let a = 100;
let b = 0;
try {
    console.log(a/b);
    throw new Error('Lỗi');
}
catch(e) {
    if(b===0) {
        throw new Error('Lỗi xảy ra');
    }
    else {
        console.log("Đã giải quyết xong ngoại lệ");
    }
}