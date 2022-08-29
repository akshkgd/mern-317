//variables -> var, let and const
//datatypes -> string, number, boolean, objects ->
//arrays and objects


//calling is variable before declaration
// console.log(name)
var name = 'ashish';
let email = 'ashish@gmail.com';
// console.log(email)
let number = 1234567890
number = '121313131'
// console.log(typeof number);

//arrays and objects


//array -> 
let hobbies = ['cricket', 'cooking', 'coding'];
// console.table(hobbies);
// push and pop
// hobbies.push('reading');
// hobbies.push('teaching');
// hobbies.pop();
// splice -> array.splice(index, items to be removed, {items to be added->optonal})
hobbies.splice(0, 0, 'hockey');
hobbies[2] = 'codekaro'
// console.table(hobbies);

//objects -> key value pair

// let user = {
//     name: 'ashish',
//     email: 'ashish@gmail.com',
//     hobbies: ['cricket', 'cooking', 'coding', 12, true],
//     age: 24,
// }

// console.log(user)
// user.name = 'ashish kumar';
// user.mobile = 1234567890;
// delete user.age;
// console.log(user[0])


let users = [
    {name: 'ashish', address: 'delhi',},
    {name: 'nayan', address: 'patna'},
    {name: 'prerit', address: 'noida'},
    {name: 'shubham', address: 'allahabad'},
    {name: 'alex', address: 'chennai'},
    {name: 'soham', address: 'tamil nadu'},
]
let newUser = {name: 'ramya', address: 'kanpur'}
users.push(newUser);
console.log(users)