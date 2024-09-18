//  THIS 

// let user = {
//     username : "Dhwani",
//     age : "20",
//     getUserDetails : function(){

        // GIVES ERROR THAT USERNME IS NOT DEFINED
        // console.log(`Hello, My username is ${username} and my age is ${age}`);

        // WE WANT TO TELL SYSTEM EHICH OBJECT IS REFERRD SO THIS KEYWORD IS USED : 
        // console.log(`Hello, My username is ${this.username} and my age is ${this.age}`);

        // IF THIS IS SONSOLED IN OBECT BLOCK IT GIVES OBJECT REFERNECE AS OUTPUT BUT IF IT
        //  IS CONSOOLED IN GLOBAL SCOPE THEN
        // console.log(this);
//     }
// }

// IF THIS IS CONSOLED OUTSIDE THE OBJECT BLOCK OR IN GLOBAL BLOCK THEN IT RETURN GLOBAL
//  OBJECT THAT IS BLANK OBJECT AS :
// console.log(this);

// IF IT IS CONSOLED IN BROWSER THEN IT GIVES A WINDOW IN CONSOLE BLOCK

// user.getUserDetails();


// CONSTRUCTORS --- > FUNCTIONS WHICH CREATE AND RETURN NEW OBJECTS

// IF A FUNCTION NAME HAS FIRST LETTER CAPITAL THEN IT IS CONSTRUCTOR --> ALWAYS 
// KEEP FIRST LETTER CAPITAL FOR CONSTRUCTOR

// function Person(name , age){
//     const personObj = {
//         username : name,
//         age : age,
//         greet : function(){
//             console.log(`Hello, my name is ${this.username} and my age is ${this.age}`);  //TEMPLATES STRING ---> 
                                                                                          //USING BACKTICK
//         }
//     }
//     return personObj;
// }

// const person1 = Person("Dhwani","20");
// const person2 = Person("Himesh","16");

// GIVES UNDEFINED WITH STATEMENT AS :
// console.log(person1.greet());

// person1.greet();
// person2.greet();


// CORRECT WAY TO FORM CONSTRUCTORS : 

// function Person(name , age){
//     this.name = name;
//     this.age = age;
//     // this.greet = function(){
//     //     console.log(`Hello, my name is ${this.name} and my age is ${this.age}`);
//     // }
// }

// DEFINE REPEATED FUNCTION AGAIN AND AGAIN IN PROTOTYPE FUNCION IN CONSOLE WINDOW ---> IT SAVES MEMORY
// Person.prototype.greet = function(){
//         console.log(`Hello, my name is ${this.name} and my age is ${this.age}`);
// }


// const person1 = new Person("Dhwani", "20");
// const person2 = new Person("Himesh", "16");
// console.log(person1);
// console.log(person2);
// person1.greet();
// person2.greet();


// let arr = [10,20,30];
// console.log(arr);



// CLASSES : 

// class Person{
//     constructor(name ,age){
//         this.name = name;
//         this.age = age;
//     }

//     // HERE FUNCTION KEYWORD NOT MANDATORY ---? IT AUTOMATICALLY TAKE FUNCTION IN PROTYTYPE FUNCTION
//     greet(){
//             console.log(`Hello, my name is ${this.name} and my age is ${this.age}`);
//     }
// }

// const person1 = new Person("Dhwani","20");
// console.log(person1);


// class Animal{
//     constructor(name){
//         this.name = name;
//     }

//     speak(){
//         console.log(`${this.name} makes a noise`);
//     }
// }


// // INHERITANCE:

// class Dog extends Animal{
//     constructor(name){

//         // SUPER KEYWORD HELPS AS NAME KEYWORK GO TO ITS PARENT CLASS AND BRING
//         //  OBJECT FROM THRE AND PUT IN CHILD CLASS HERE

//         super(name);
//     }

//     speak(){
//         console.log(`${this.name} barks`);  //FUNCTION OVERRIDING
//     }
// }

// class Cat extends Animal{
//     constructor(name){
//         super(name);
//     }
//     speak(){
//         console.log(`${this.name} meows`);
//     }
// }


class BankAccount{
    // WHEN KEYWORK IS INITIATED WITH # IT IS TRATED AS PRIVATE MEMBER SO
    // IT CANNOT B ACCESS GLOBLLY IT CANBE MANIPULATED USING CONSTCUTOR FUNCION ONLY
    #balance = 0;

    constructor(owner){
        this.owner = owner;
    }

    deposit(amount){
        this.balance += amount;
        console.log(`${this.owner} deposited ${amount} , Current Balance : ${this.#balance}`);
    }
}