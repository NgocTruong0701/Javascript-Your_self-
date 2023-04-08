let getData = (input) =>{
    setTimeout(()=>{
        return new Promise((resolve, reject) =>{
            if(typeof input !== 'number') reject(new Error('Input is invalid'));
            resolve({err: null,data: input + Math.round(Math.random() * input)});
        })
    }, 1000);
}

getData(1).then((data) => console.log(data));

// const num = 10;
// let promise = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         if(typeof num !== 'number') reject(new Error('Input is invalid'));
//         resolve({err: null, data: num + Math.round(Math.random() * num)});
//     },1000)
// })
//     .then((result)=>{return new Promise((resolve, reject) =>{
//         setTimeout(()=>{
//             if(typeof result.data !== 'number') reject(new Error('Input is invalid'));
//             resolve({err: null, data: result.data + Math.round(Math.random() * result.data)});
//         },1000)
//     })})
//     .then((data) => console.log(data))
//     .catch((err)=>console.log(err))