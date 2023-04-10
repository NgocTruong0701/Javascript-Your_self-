// declaration function -- có tính năng hoisting, có nghĩa nó có thể gọi trong khi bên dưới mới định nghĩa,
// thuộc phạm vi global scope --> điều này k cần thiết với các hàm callback hoặc khi bạn không muốn global scope
// không clear --> ta nên dùng expression function or arrow function ở các trường hợp này
declarationFunction(); // chạy được
function declarationFunction(){
    console.log('Declaration Function');
}
// expression function -- không có tính năng hoisting
// expresstionFunction(); // lỗi Cannot access 'expresstionFunction' before initialization
let expresstionFunction = function() {
    console.log('Expression Function');
}
expresstionFunction();
// arrow function -- không có tính năng hoisting
//arrowFunction; // Cannot access 'arrowFunction' before initialization
let arrowFunction = () => console.log('Arrow Function');
arrowFunction(); 


// từ khóa this với hàm arrow --> tham chiếu đến phạm vi cha của function đó
function sinh_vien() {
    this.id = 100;
    this.vidu = function() {
        console.log(this.id); // 100 -- có thể truy cập vì this.id là 1 thuộc tính của đối tượng và vidu là 1 phương thức của đối tượng
        function vidu_2() {
            console.log(this.id); // undefined -- vì this trong hàm lồng sẽ tham chiếu đến đối tượng toàn cục
        }
        vidu_2();
        let vidu_3 = () =>{
            console.log(this.id); // 100 --> arrow function nên this sẽ đc tham chiếu đến đối tượng cha chứa arrow đó là sv
        }
        vidu_3();
    }
}

let sv = new sinh_vien();
sv.vidu();

// Liên kết các đối số
let vidu = function (){
    console.log(arguments);
}
vidu(1,2,3,4); //

// let vidu2 = () => {
//     console.log(arguments); // lỗi --> đưa ra danh sach đối số của thằng đối tượng toàn cục
// }
let vidu2 = (...args) =>{
    console.log(args);
}
vidu2(1,2,3,4); 
