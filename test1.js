/**
 * 1. Chuyển function Person sang class Person
 */
const Person = function (name, yearOfBirth) {
  this.name = name
  this.yearOfBirth = yearOfBirth
}
// a.
Person.prototype.getAge = function () {
  return new Date().getFullYear() - this.yearOfBirth
}

/** @param {string[]} nameArray */
Person.getRandomPerson = function (nameArray) {
  const randomName = nameArray[Math.floor(nameArray.length * Math.random())]
  return new Person(randomName, 10)
}

// b. Nâng cao
Object.defineProperties(Person.prototype, {
  age: {
    get() {
      return new Date().getFullYear() - this.yearOfBirth
    }
  }
})

// c. Nâng cao: chuyển class Car thành function Car
class Vehicle {
  constructor(type) {
    this.type = type
  }
}
class Car extends Vehicle {
  constructor(name) {
    super('duong bo')
    this.name = name
  }
}