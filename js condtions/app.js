let users = [
    { name: 'John', email: 'john@gmail.com' },
    { name: 'Ashish', email: 'ashish@gmail.com' },
    { name: 'archan', email: 'archanrd@gmail.com' },
    { name: 'abhishek', email: 'abhisheksharma@gmail.com' },
    { name: 'Nisha', email: 'np@gamil.com' },
    // {name:"manas", email: 'krishnamanash@gmail.com'},
    // {name: 'Rohit', email: 'rohitak120@gmail.com'},
    // {name:'Manikanta', email:'manikanta9@gmail.com'},
    // {name: "Nimmana Prasanth", email: "npr@gmail.com"},
    // {name: 'shubhangi' ,email:'shubhangibitake24@gmail.com'}
]
let totalUsers = users.length;
// console.log(totalUsers);
let winner = Math.floor(Math.random() * totalUsers);
// console.log(users[winner].name)


//conditionals
// let age = 8;
// if(age > 18){
//     console.log('You are eligible to vote');
// }
// else{
//     console.log('You are not eligible to vote');
// }

// let weather = 'rainy';

// if (weather == 'rainy'){
//     console.log('Take an umbrella');
// }
// else if (weather == 'sunny'){
//     console.log('Take sunglasses');
// }
// else if (weather == 'cold'){
//     console.log('Take a jacket');
// }
// else{
//     console.log('It is a beautiful day');
// }


// let age = '18';

// if(age == 18){
//     console.log('congrats you are 18');
// }

//ternary operator
// condition ? (true)  : false
// let age = 19;
let role = 0;
let userStatus = role == 0 ? 'student' : role == 1 ? 'teacher' : role == 2 ? 'admin' : 'invalid user';
console.log(userStatus);

//if else statement
// let age = 29;

// if(age > 18 && age <24){
//     console.log('You are eligibe to apply');
// }

// let friend = 'ruchika';

// if(friend == 'Nisha'  || friend == 'ruchi' || friend == 'ruchika'){
//     console.log('i will be there for party');
// }
// else{
//     console.log('i will not be there for party');
// }
let userName = 'ashish';
let password = '123456'
if (password == '12345' && userName == 'ashish') {
    console.log('login successfull')
}
else {
    console.log('Login failed!')
}


console.log('10' && 2)
console.log(2 && '10')
console.log('10' & 2)
console.log(2 & '10')

console.log('10' || 2)
console.log(2 || '10')
console.log('10' | 2)
console.log(2 | '10')
