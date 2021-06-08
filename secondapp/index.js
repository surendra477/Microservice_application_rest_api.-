const express = require('express');
const app = express();
const mongoose = require("mongoose");
const ejs = require('ejs')
app.set("view engine","ejs");
const {Data} = require("./Models/data");
mongoose.connect("mongodb://127.0.0.1:27017/rest",{useNewUrlParser: true, useUnifiedTopology: true ,useFindAndModify: false}).then((res,req) =>{
    console.log("database connected");
})
app.post('/',async (req,res) => {
    const name = req.query['name'];
    let user = new Data({
        username:name
})
    user = await user.save();
  if (!user) return res.status(404).send("the user cannot be created");
  res.redirect("/");
})

app.get("/",async (req,res) => {
let datadb = await Data.find();
res.render("list.ejs",{
    
    str: datadb
  })
})


app.listen(3001,() => {
    console.log("server is running on port number 3001");
})