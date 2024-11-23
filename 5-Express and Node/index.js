const express = require("express")

const app= express()

app.get('/',(req, res)=>{
    res.end("Hello your are on the Home Page")
})
app.get('/about', (req, res)=>{
    res.end(`Hey! ${req.query.name} you are ${req.query.age} years old`)
})

app.listen(3000,()=>{console.log("Hey there! I am listning")})