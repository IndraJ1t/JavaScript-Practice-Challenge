
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello ${this.name}, your age is ${this.age}.`);
    };
    // ageUpdate() {
    //     person1.age = 20;
    // }
    static meth() {
        return console.log("Hello this is static method")
    }
}
console.log(Person.meth());


// console.log(meth());   /* meth is not defined error as methiod is static */


const person1 = new Person("Sam", 19);
// person1.ageUpdate();
const greeting = person1.greet();
// console.log(greeting);


/* Inheritance */

class Student extends Person {
    static counter = 0;
    constructor(student_id,) {
        super("Indrajit", 21)
        this.student_id = student_id;
        Student.counter++

    }
    logStudent() {
        console.log(student1.greet());
    }
    greet() {
        console.log(`Hello ${this.name}, your age is ${this.age} and sutdent id is ${this.student_id}.`);
    };

}
const student1 = new Student(1234)
// const student2 = new Student(2004)
student1.logStudent()
console.log(`Total no of students created = ${Student.counter}`);


/* getters and setters */

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    get email() {
        return this._email.toUpperCase()/* _email denotes private property used for storing the value internally */
    }
    set email(value) {
        this._email = value;
    }
}
const indt = new User("Indrajit", "singh@gmail.com")
console.log(indt.email);

/* private fields */

class Account {
    static balance = 0;
    constructor(initialBalance) {
        this.balance = initialBalance;
    }
    deposit(amount) {
        this.balance += amount;
    }
    withdrawl(amount) {
        this.balance -= amount;
    }
    getBalance() {
        return this.balance
    }
}
const myAccount = new Account(500)
myAccount.deposit(200);
myAccount.withdrawl(100);
console.log(myAccount.getBalance());