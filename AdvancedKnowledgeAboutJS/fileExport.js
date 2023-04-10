// kết xuất (export) 1 đối tượng
// xuất đối tượng mặc định (default) trong file xuất
export function phepchia(a, b){
    return a / b;
}
// kết xuất (export) thêm 1 đối tượng
export const a = 'Hello form file Export.js';

// đổi tên trong module 
export {
    phepchia as divide,
    a as hellu
};

export default function phepcong(a, b){
    return a + b;
}