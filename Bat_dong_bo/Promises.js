let vidu = new Promise(function(resolve, reject){
    if(true){
        let result = 'Xu ly thanh cong';
        resolve(result);
    }else{
        reject("Tu choi");
    }
});
vidu.then(function(result){console.log(result);data = 'Promise 2'; return data}).catch(function(err){console.log(err)})//.then(function(data){console.log(data)});

// Các phương thức của Promise

// Promise.all() --> trả về 1 Promise mới, chỉ kết thúc khi các Promise iterable được iterable được hoàn thành, trả về mảng kết quả theo thứ tự tương ứng.
// nếu có 1 Promise trong iterable thất bại thì nó sẽ trả về Promise thất bại ngay lập tức, các Promise còn lại trong iterable sẽ không được sử lý
const promise1 = Promise.resolve(1);
const promise2 = Promise.resolve(2);
const promise3 = Promise.resolve(3);

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values); // [1, 2, 3]
});


// Promise.allSettled() --> trả về 1 Promise mới gồm danh sách các kết quả của các promise() bao gồm thành công và thất bại
const promise_1 = Promise.resolve(1);
const promise_2 = Promise.reject("error");
const promise_3 = Promise.resolve(3);

Promise.allSettled([promise_1, promise_2, promise_3]).then((results) => {
  console.log(results);
  /*
    [
      {status: "fulfilled", value: 1},
      {status: "rejected", reason: "error"},
      {status: "fulfilled", value: 3},
    ]
  */
});

// Promise.any() --> Trả về promise đầu tiên thành công
const promisea = new Promise((resolve, reject) => {
    setTimeout(() => resolve("result 2"), 1000);
  });
  
  const promiseb = new Promise((resolve, reject) => {
    setTimeout(() => reject("Error 1"), 500);
  });
  
  const promisec = new Promise((resolve, reject) => {
    setTimeout(() => resolve("result 3"), 2000);
  });
  
  Promise.any([promisea, promiseb, promisec]).then((result) => {
    console.log(result); // "result 2"
  });
  
// Promise.race() --> trả về 1 promise đầu tiên hoàn thành dù thành công hoặc thất bại
const promise__1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("result 1"), 1000);
  });
  
  const promise__2 = new Promise((resolve, reject) => {
    setTimeout(() => reject("error 2"), 500);
  });
  
  const promise__3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("result 3"), 2000);
  });
  
  Promise.race([promise__1, promise__2, promise__3]).then((result) =>{console.log(result)}).catch((error) => {console.log(error)});
  

function caculator(a, b){
    if(b == 0){
        return Promise.reject('Khong the chia cho 0');
    }
    return Promise.resolve(a / b);
}

caculator(1,2).then((result) => {console.log(`Result = ${result}`)}).catch((error) => {console.log(`Error: ${error}`)});

