const mongoose = require("mongoose");
const express = require("express");
const app = express();
app.use(express.json());


mongoose.connect("");

const newUser =  mongoose.model( 'User', {
        name : String,
        email : String,
        password: String
})

app.get('/signup', (req,res)=>{
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    const user = new newUser({ 
        name : name,
         email : email,
         password: password
        })
    user.save();
    res.json({
        msg : "User Saved Successfully"
    })
})

app.listen(3000, ()=> {
    console.log("Connected....");
})