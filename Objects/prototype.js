function sinhvien (){
    this.name = 'Le Ngoc Truong',
    this.age = 20,
    this.address = 'Thanh Hoa'
}

const sv1 = new sinhvien();
const sv2 = new sinhvien();

sinhvien.prototype.dh = 'Cong nghiep ha noi';

console.log(sinhvien);
console.log(sv1.dh);
console.log(sv2.dh);

sinhvien.prototype.xin_chao_method = function() {
    console.log('Toi ten la: ' + this.name);
}

sv1.xin_chao_method();

sinhvien.prototype.dh = 'Chua co';
const sv_new = new sinhvien();
console.log(sv_new.dh);










// // Đây là 2 ví dụ về kế thừa và ghi đè của prototype 

// // Định nghĩa một prototype cho các đối tượng Employee
// const EmployeePrototype = {
//     fullName: function() {
//       return `${this.firstName} ${this.lastName}`;
//     }
//   }
  
//   // Định nghĩa hàm khởi tạo Employee
//   function Employee(firstName, lastName, jobTitle) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.jobTitle = jobTitle;
//   }
  
//   // Gán prototype cho hàm khởi tạo Employee
//   Employee.prototype = EmployeePrototype;
  
//   // Tạo đối tượng Manager kế thừa từ Employee
//   function Manager(firstName, lastName, employees) {
//     Employee.call(this, firstName, lastName, 'Manager');
//     this.employees = employees;
//   }
  
//   // Kế thừa từ EmployeePrototype
//   Manager.prototype = Object.create(EmployeePrototype);
  
//   // Ghi đè phương thức fullName của prototype cho phù hợp với đối tượng Manager
//   Manager.prototype.fullName = function() {
//     return `${this.lastName}, ${this.firstName}`;
//   }
  
//   // Tạo đối tượng Employee và Manager
//   const employee1 = new Employee('John', 'Doe', 'Developer');
//   const manager1 = new Manager('Jane', 'Doe', [employee1]);
  
//   // Gọi phương thức fullName trên các đối tượng Employee và Manager
//   console.log(employee1.fullName()); // John Doe
//   console.log(manager1.fullName()); // Doe, Jane
  
