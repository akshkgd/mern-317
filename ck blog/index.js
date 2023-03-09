const express = require('express');
const app = express();
const ejs = require('ejs');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
app.set('view engine', 'ejs')
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));
mongoose.connect('mongodb+srv://codekaro:codekaro123@cluster0.6ducpnq.mongodb.net/?retryWrites=true&w=majority').then(()=>{
    console.log('DB is connected!')
})
// schema for blog
const blogSchema = new mongoose.Schema({
    title: String,
    desc: String,
    createdAt: Date,
    article: String,
    type: Number
})

app.get('/', (req,res)=>{
    res.render('index')
})

app.get('/add', (req,res)=>{
    res.render('admin/add')
})
app.post('/create-post', (req,res)=>{
    const Post = mongoose.model('blog', blogSchema)
    let data = new Post({
        title: req.body.title,
        desc: req.body.desc,
        createdAt: new Date(),
        article: req.body.article,
        type: req.body.type,
    });
    data.save();
    res.redirect('/')
})
app.get('/post', async(req,res)=>{
    const Post = mongoose.model('blog', blogSchema)
    let data = await Post.find({type: 0})
    console.log(data);
    res.redirect('/')
})
app.get('/premium', async(req,res)=>{
    const Post = mongoose.model('blog', blogSchema)
    let data = await Post.find({type: 1})
    console.log(data);
    res.render('premium', {blogs: data})
})
app.get("/:id", async(req,res)=>{
    const Post = mongoose.model('blog', blogSchema);
    let data = await Post.findById(req.params.id);
    // console.log(data);
    res.render('blog', {blog: data})
})
app.listen(3000, ()=>{
    console.log('Server running on port 3000')
})