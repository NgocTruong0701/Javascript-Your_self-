
const { error } = require('console');
const fs = require('fs');

fs.readFile('txt1.txt', (error, data) => {
    if (error) throw error;
    const text1 = data.toString();
    fs.readFile('txt2.txt', (error, data) => {
        if (error) throw error;
        const text2 = data.toString();
        fs.readFile('txt3.txt', (error, data) => {
            if (error) throw error;
            const text3 = data.toString();
            console.log(text1.concat(" " + text2).concat(' ' + text3));
        })
    })
})

const readFile_1 = new Promise((resolve, reject) => {
    fs.readFile('txt1.txt', (error, data) =>{
        if(error) reject(error);
        resolve(data);
    });
});

const readFile_2 = new Promise((resolve, reject) => {
    fs.readFile('txt2.txt', (error, data) => {
        if(error) throw error;
        resolve(data);
    });
});

const readFile_3 = new Promise((resolve, reject) => {
    fs.readFile('txt3.txt', (error, data) => {
        if(error) reject(error);
        resolve(data)
    })
})

const result = Promise.all([readFile_1, readFile_2, readFile_3])
    .then((datas) => {
        let result = '';
        for(let value of datas){
            result += value + " ";
        }
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    })
