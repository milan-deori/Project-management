const express =require ('express');
const cors=require("cors");
const dotenv=require("dotenv");
const morgan=require("morgan");


const app=express();

const PORT=8000;

app.get( "/",(req,res)=>{
    res.send("hello")
} )


app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})