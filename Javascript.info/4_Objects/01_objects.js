//example of objects
let user = {
    name: "John",
    age: 30
};

//Print Properties of an object
console.log(user.name);
console.log(user.age)

//Assign new properties to the object
user.isAdmin = true
console.log(user)

//remove a property
delete user.age;
console.log(user);

//Multiword Property must be quoted
user = {
    name: 'John',
    age: 30,
    "likes birds": true, //It is a good practise to add comma after the last property
}
console.log(user["likes birds"]) //the way to access multi word property
delete user["likes birds"];

//You can also store the multi word property in a variable and assign it to an object
let key = "likes birds"
user[key] = true;

//Assign property as a variable
let fruit = "apple";
let bag = {
    [fruit] : 5 // The name of the property is taken from the variable fruit
}
console.log(bag.apple)
bag = {
    [fruit + "Computers"] : 5 //appleComputers = 5
}

//functions for objectCreation
function makeUser(name, age){
    return {
        name : name,
        age : age,
    };
}

let user1 = makeUser("Ruhit", 22);
let user2 = makeUser("Arman", 22);
console.log(user1.name);
console.log(user2.name);

//Loop
user = {
    name: "john",
    age: 30,
    isAdmin: true,
}

for (let key in user){
    console.log(key);
    console.log(user[key]);
}

//Interger Properties in an object will be arranged in a sortred way
let codes = {
    "49" : "Germany",
    "41" : "Switzerland",
    "44" : "Great Britain",
    "1" : "USA",
}
for (let key in codes){
    console.log(codes)
}