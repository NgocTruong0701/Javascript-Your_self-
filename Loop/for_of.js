const arr = ['Hello', 'Every', 'One'];
for(let value of arr){
    console.log(value);
}

const setCollection = new Set(['Xin', 'Chao', 'Tat', 'Ca', 'Moi', 'Nguoi']);
for(let value of setCollection){
    console.log(value);
}

const word = 'Truong';
for(let value of word){
    console.log(value);
}

const map = new Map();
map.set('ID', 100);
map.set('Name', 'Le Ngoc Truong');
map.set('Age', 20);
for(let [key,value] of map){
    console.log(`${key}: ${value}`);
}