const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3000;
const mongoURI = "mongodb+srv://ashishvalvinvp:O1z1gYSWysjEInwq@namasteashish.447hw.mongodb.net/?retryWrites=true&w=majority&appName=namasteAshish";
const User = require('./usermodel')
const https = require('https');
const cors = require('cors');


app.use(cors({
    origin: 'https://www.ashishvalvi.in'
}));

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

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));