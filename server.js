const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Port = 3000;
const mongoURI = "mongodb+srv://ashishvalvinvp:O1z1gYSWysjEInwq@namasteashish.447hw.mongodb.net/?retryWrites=true&w=majority&appName=namasteAshish";
const User = require('./usermodel')

app.use(express.json());// parse incoming json req
mongoose.connect(mongoURI).then(()=>{
    console.log("MongoDB connected to server")
}).catch(
    (err)=>{
        console.log("failed to connect mongodb server",err)
    }
);

app.use(express.json());

app.post("/signup", async(req,res)=>{
    try {
        const newUser = new User(req.body);
        const savedUser = await newUser.save();
        res.status(201).send("new user have created");
    } catch (err) {
        res.status(400).send("user creation fail")
    }
})

app.listen(Port, () => {
    console.log(`Server is running on http://localhost:${Port}`);
  });