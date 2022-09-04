//map filters and reduce
let numbers = [23, 67, 98, 54, 27, 11, 105, 3, 1, 0]

// for(i=0; i<=numbers.length; i++){
//     let number = numbers[i]*numbers[i]
//     console.log(number)
// }

// let sqr = numbers.map((x)=>{
//     return x*x;
// })

// let cube = numbers.map(function(x){
//     return x*x*x;
// })
// console.log(sqr)
// console.log(cube)


// let numbersGreaterThan5 = numbers.filter((x)=>{
//     if(x>5){
//         return x;
//     }
// })
// console.log(numbersGreaterThan5)

//chaining process 
// let cube = numbers.map(function(x){
//         return x*x*x;
//     })

// let cubeFilters = numbers.map(function(x){
//         return x*x*x;
//     }).filter((x)=>{
//         return x>100;
//     })
//     console.log(cube)
//     console.log(cubeFilters)


//reduces 

// let total = numbers.reduce((previous, current) => {
//     let sum = current + previous;
//     return sum;
// }, 0)

// console.log(total)

let max =numbers.reduce((pre, curr)=>{
    
    if(pre < curr){
        pre = curr;
        console.log('now the max value is ', pre)
    }
    return pre;
}, 0)

console.log(max)
// console.log(greatest)