let name = 'Le Ngoc Truong';

console.log(name[4]);
console.log(name.charAt(4));

name[4] = 'd';
console.log(name);

let age = '20';

let fullNameAndAge = name.concat("Tuoi").concat(age);
console.log(fullNameAndAge);

let testTrim = '             Lê        Ngọc             Trường        ';
let result = testTrim.trim();
console.log(result);

console.log(name.includes('Ngoc'));
console.log(name.search('Ngoc'));
console.log(name.indexOf('Ngoc'));

let status = "Tôi tên là \"Lê Ngọc Trường\"";
console.log(status);