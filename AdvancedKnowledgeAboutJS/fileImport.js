// import { phepchia } from "./fileExport.js";
// let kq = phepchia(4,2);
// console.log(kq);

// nhập nhiều đối tượng (import)
import { phepchia, a } from "./fileExport.js";
console.log(a);
console.log(phepchia(4,2));

// nhập module có các hàm và biến được đổi tên
import { divide, hellu } from "./fileExport.js";
console.log(divide(4,2));
console.log(hellu);

// nhập đối tượng mặc định (default) trong file nhập (phep_chia không có tồn tại vì vậy nó sẽ lấy đối tượng mặc định xuất để nhập)
import phep_cong from "./fileExport.js"; // sử dụng trực tiếp đối tượng xuất mặc định mà k cần dấu {}
console.log(phep_cong(4,2));