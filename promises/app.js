// console.log('Downloading...');

// setTimeout(()=>{
//     console.log('Image Downloaded');
// }, 3000)

// console.log('Image is processed!!');


// let promise = new Promise((resolve, reject)=>{
//     resolve()
//     // reject()
// })

// promise.then(()=>{
//     console.log('task completed!')
// }).catch(()=>{
//     console.log('Something went wrong!!')
// })

// console.log('downloading...')
// let taskA = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         console.log('image downloaded!')
//         reject()
//     }, 1000);
// })

// taskA.then(()=>{
//     console.log('image is processed!')
// }).catch(()=>{
//     console.log('Image can not be processed')
// })



function quote(){
    let random = Math.floor(Math.random()*1000)

    fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data[random].text);
  });
}
quote();
