const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const app = express();
const users = []
app.use(bodyParser.urlencoded({extended: true}))
app.set('view engine', 'ejs')
app.use(express.static('public'));
const mongoose = require('mongoose');
const { strict } = require('assert');
const ObjectId = require('mongodb').ObjectID;
mongoose.connect('mongodb+srv://codekaro:codekaro123@cluster0.6ducpnq.mongodb.net/?retryWrites=true&w=majority').then(()=>{
    console.log('DB is connected!')
})

// schema
const userSchema = new mongoose.Schema({
    name: String,
    email: String
})


app.get('/', (req, res)=>{
    res.render('index')
})
app.post('/add', (req,res)=>{
    const User = mongoose.model('students', userSchema)
    let data = new User ({
        name: req.body.name,
        email: req.body.email
    })
    data.save();
    res.redirect('/');
})

app.get('/students', async (req,res)=>{
    const User = mongoose.model('students', userSchema)
    let data = await User.find()
    console.log(data)
    res.render('users', {students: data})
})
app.post('/edit', async (req, res)=>{
    const User = mongoose.model('students', userSchema)
    let data = await User.findOne({_id: ObjectId(req.body.id)})
    console.log(data);
    res.render('edit', {student: data});
})
app.post('/update', async (req, res)=>{
    const User = mongoose.model('students', userSchema)
    let data = await User.updateOne(
       {
        _id : ObjectId(req.body.id)
       },
       {
        $set: {
            name: req.body.name,
            email: req.body.email
        }
       })
       res.redirect('/students')
       
    })

app.listen(3000, ()=>{
    console.log('Server running on port 3000')
})