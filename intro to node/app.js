const express = require('express');
const app = express();


app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/home.html')
    
})
app.get('/about',(req,res)=>{
    res.send('<h1>about page called!</h1>')
})
app.listen(3000, ()=>{
    console.log('app.js is now running on port 3000');
})