const express=require("express");
const app=express();
const bodyParser=require("body-parser");
const path = require("path");
const PORT=3400;

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.send("hello everyone ")
});

app.listen(PORT,()=>{
    console.log(`listening to port https://localhost:${PORT}`)
});
