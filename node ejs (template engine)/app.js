const express = require('express');
const bodyParser = require('body-parser')
const ejs = require('ejs');
const app = express()
app.use(bodyParser.urlencoded({extended:true}))
app.set(('view engine'), 'ejs')
app.get('/', (req, res)=>{
    res.sendFile(__dirname+'/home.html')
})
app.post('/register', (req,res)=>{
    res.render('register', {name:req.body.name, emailId:req.body.email})
})
app.listen(3000, ()=>{
    console.log('server running on port 3000')
})