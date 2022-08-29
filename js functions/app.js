// function grinder(items){
//     console.log('grinding...', items)
// }

// grinder('tomatoes');
// grinder('potatoes');


// function add(num1, num2){
//     console.log(num1 + num2)
// }

// add(2,3);
// add(12,23);


//calculate the tds => gov => tds is 10 %

function calculateTds(salary){
    let tds = salary * 0.1;
    // console.log(tds);
    return tds;
}

// calculateTds(12000)
// console.log(tds);
// general function syntax
function functioName(){
    //code
}
//arrow functions 
arrowFunctionName = () => {
    //code
}
cube = (number)=>{
    console.log('calculating cube of ', number)
    return(number * number * number)
}
sqr =(number) => number* number;
// console.log(cube(2));
// console.log(cube(3));
// console.log(sqr(4));


// loop -> executing the same task again and again

// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log('loop is running')
// //i = i+1;
// for(let i=1; i<61; i++){
//     console.log(i)
// }

let shoppingList = ['Milk', 'Coffee', 'Butter', 'Notebook', 'Pen']

for(let i=0; i<shoppingList.length; i++){
    // console.log(shoppingList[i])
}

let users = [
    { name: 'John', email: 'john@gmail.com' },
    { name: 'Ashish', email: 'ashish@gmail.com' },
    { name: 'archan', email: 'archanrd@gmail.com' },
    { name: 'abhishek', email: 'abhisheksharma@gmail.com' },
    { name: 'Nisha', email: 'np@gamil.com' },
    {name:"manas", email: 'krishnamanash@gmail.com'},
    {name: 'Rohit', email: 'rohitak120@gmail.com'},
    {name:'Manikanta', email:'manikanta9@gmail.com'},
    {name: "Nimmana Prasanth", email: "npr@gmail.com"},
    {name: 'shubhangi' ,email:'shubhangibitake24@gmail.com'}
]

for(i=0; i<users.length; i++){
    console.log(users[i].name)
}