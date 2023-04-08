const sinh_vien = {
    name: 'Le Ngoc Truong',
    id: 1,
    address : 'Thanh hoa'
};

for(let key in sinh_vien){
    console.log(`${key} là: ${sinh_vien[key]}`);;
}

const a = 'Hello world';
for(key in a ){
    console.log(a[key]);
}