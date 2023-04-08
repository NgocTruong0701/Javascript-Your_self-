const { info } = require('console');
const fs = require('fs');
const { resolve } = require('path');

// async function getNames(fileName){
//     return new Promise((resolve, reject) =>{
//         fs.readFile(fileName, (err, data) =>{
//             if(err){
//                 resolve({err: err, data: null});
//             }else{
//                 let data1 = data.toString();
//                 resolve({err: null, data: data1});
//             }
//         })
//     })
// }

// async function getAges(fileAge){
//     return new Promise((resolve, reject)=>{
//         fs.readFile(fileAge, (err,data) =>{
//             if(err){
//                 resolve({err: err, data: null});
//             }
//             else{
//                 let data1 = data.toString();
//                 resolve({err: null, data: data1});
//             }
//         })
//     })
// }

// async function getAddesses(fileAddress){
//     return new Promise((resolve, reject)=>{
//         fs.readFile(fileAddress, (err,data) =>{
//             if(err){
//                 resolve({err: err, data: null});
//             }
//             else{
//                 let data1 = data.toString();
//                 resolve({err: null, data: data1});
//             }
//         })
//     })
// }

async function getAllInfor(fileName, fileAge, fileAddress){
    const infor = await Promise.all([getNames(fileName), getAges(fileAge), getAddesses(fileAddress)]);
    const names = infor[0].data.split('\r\n');
    const ages = infor[1].data.split('\r\n');
    const addresses = infor[2].data.split('\r\n');

    const person = [];
    for(let i = 0 ;i < names.length;i++){
        let p = {name: names[i], age: ages[i], address: addresses[i]};
        person.push(p);
    }
    return person;
}

async function readFile(file){
    return new Promise((resolve, reject) =>{
      fs.readFile(file, (err,data) =>{
        if(err){
            resolve({err: err, data: null});
        }
        else{
            resolve({err: null, data: data.toString()});
        }
      })  
    })
}

async function readFiles(fileName, fileAge, fileAddress){
    const files = [fileName, fileAge, fileAddress];
    const promises = files.map((file) => readFile(file));

    const results = await Promise.all(promises);
    const names = results[0].data.split('\r\n');
    const ages = results[1].data.split('\r\n');
    const addresses = results[2].data.split('\r\n');

    const person = [];
    for(let i = 0 ;i < names.length;i++){
        let p = {name: names[i], age: ages[i], address: addresses[i]};
        person.push(p);
    }
    return person;
}

(async() =>{
    const fileName = 'ten.txt';
    const fileAge = 'tuoi.txt';
    const fileAddress = 'quequan.txt';

    //const persons = await getAllInfor(fileName, fileAge, fileAddress);
    //console.log(persons);

    const person = await readFiles(fileName, fileAge, fileAddress);
    console.log(person);
})();
