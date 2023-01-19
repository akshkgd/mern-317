const express = require('express');
const mongoose = require('mongoose');
let app = express();

mongoose.connect('mongodb+srv://codekaro:codekaro123@cluster0.6ducpnq.mongodb.net/?retryWrites=true&w=majority').then(()=>{
    console.log('connection is successful to MongoDB')
})

const usersSchema = new mongoose.Schema({
    name: String,
    email: String,
})

const User = mongoose.model('users', usersSchema);
// // create new data
//  let data = new User({
//     name: 'Ashish Shukla',
//     email: 'ashish@gmail.com'
// })
//  const result = data.save();

// read
const findUser = async () =>{
    const User = mongoose.model('users', usersSchema);
    let data = await User.find()
    console.log(data)
}
// findUser()

const findOneUser = async () =>{
    const User = mongoose.model('users', usersSchema);
    let data = await User.findOne({name: 'Arpit'})
    console.log(data)
}
// findOneUser()

// update
const updateUser = async ()=>{
    const User = mongoose.model('users', usersSchema);
    let data = await User.updateOne(
        {name: 'Yash'},
        { $set: {
            name: 'Ashish Shukla',
            email: 'ashish@gmail.com'
        }}
    )
    console.log(data)
}

const updateManyUser = async ()=>{
    const User = mongoose.model('users', usersSchema);
    let data = await User.updateMany(
        {name: 'Ashish Shukla'},
        { $set: {
            email: 'info@codekaro.in'
        }}
    )
    console.log(data)
}
updateManyUser();
// delete
const deleteUser = async ()  =>{
    const User = mongoose.model('users', usersSchema);
    let data = await User.deleteMany({name: 'Arpit'})
    console.log(data)
}


deleteUser()


updateUser()
app.listen(3000, ()=>{
    console.log('server is running on port 3000')
})