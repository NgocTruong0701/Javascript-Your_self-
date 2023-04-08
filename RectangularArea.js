const { resolve } = require("path");

const hinhChuNhatList = [
    { chieuDai: 2, chieuRong: 3 },
    { chieuDai: 5, chieuRong: 7 },
    { chieuDai: 8, chieuRong: 10 },
    { chieuDai: 4, chieuRong: 6 },
    { chieuDai: 9, chieuRong: 2 },
    { chieuDai: 11, chieuRong: 4 },
    { chieuDai: 7, chieuRong: 9 },
    { chieuDai: 6, chieuRong: 3 },
    { chieuDai: 12, chieuRong: 5 },
    { chieuDai: 3, chieuRong: 8 }
];

const tinhHinhChuNhat = (hinhChuNhat) => {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            let area = hinhChuNhat.chieuDai * hinhChuNhat.chieuRong;
            resolve(area);
        },1000);
    })
}

async function tinhDienTich10Hinh(hinhChuNhatList){
    const dienTichList = [];
    for(let i = 0; i < hinhChuNhatList.length; i += 2){
        const dienTich2Hinh = await Promise.all([tinhHinhChuNhat(hinhChuNhatList[i]), tinhHinhChuNhat(hinhChuNhatList[i+1])]);
        dienTichList.push(dienTich2Hinh);
    }

    return dienTichList;
}

tinhDienTich10Hinh(hinhChuNhatList)
    .then((dienTichList) => {
        console.log(dienTichList);
    })
    .catch((err) =>{
        console.log(err);
    })
