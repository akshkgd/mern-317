//map -> transform whole array
//filter -> filtering the value
//REDUCE -> calculations  => feedback system


let numbers = [3, 5, 9, 1, 2, 6, 0, 23, 78, 99, 11, 71, 89];

let maximum = numbers.reduce((max, curr)=>{
    if(curr > max){
        max = curr;
    }
    return max
}, 0)

// console.log(maximum)


//map
let array = [1,2,3,4,5,6,7,8,9];
// let sqrs = array.map(function(x){
//     return x*x;
// })

function sqr(num){
    return num*num;
}
let sqrs = array.map(sqr)
console.log(sqrs)


let even = array.filter((x)=>{
    return x%2 ==0;
})

console.log(even);