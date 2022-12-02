//In case of variable it just copy's it
let message = "hello";
phrase = message;

//But in case of objects it will copy the references
let user = {name: "john"}
let admin = user; //copy the reference
admin.name = 'Pete' //changed the admin reference
console.log(user.name); //user reference will also be changed

//comparison by reference
//Two objects are equal only if they are the same object
let a = {}
let b = a;
console.log(a == b)
console.log(a === b)

a = {}; b = {}
console.log(a == b) //false

//Const object can be modified
const user = {
    name: 'John',
};
user.name = "Pete";
console.log(user.name);

//To copy you can use this