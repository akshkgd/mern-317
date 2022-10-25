function processVideo(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve('Video Processed')
        }, 2000)
    })
}

async function callProcessVideo(){
    console.log('Video Processing Started')
    let result = await processVideo();
    console.log(result)
}


// async function x(){
//    let result =  await processVideo()
//    console.log(result)
// }
// x()
callProcessVideo()