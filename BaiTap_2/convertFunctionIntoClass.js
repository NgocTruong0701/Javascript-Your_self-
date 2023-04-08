class Person{
    constructor(name, yearOfBirth){
        this.name = name;
        this.yearOfBirth = yearOfBirth;
    }

    get getName(){
        return this.name;
    }

    set setName(name){
        this.name = name;
    }

    get getAge(){
        return new Date().getFullYear() - this.yearOfBirth;
    }

    set setAge(age){
        this.age = age;
    }

    getRandomPerson(nameArray) {
        const randomName = nameArray[Math.floor(nameArray.length * Math.random())];
        return new Person(randomName, 10);
    };
}

const p = new Person('Le Ngoc Truong', 2002);
console.log(p);
console.log(p.getName);
console.log(p.getAge);