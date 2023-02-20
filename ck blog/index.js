const express = require('express');
const app = express();
const ejs = require('ejs');
app.set('view engine', 'ejs')
app.use(express.static('public'));



app.get('/', (req,res)=>{
    res.render('index')
})

app.listen(3000, ()=>{
    console.log('Server running on port 3000')
})