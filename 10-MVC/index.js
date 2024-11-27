const express = require("express");
const studentRoutes= require("./routes/studentRoutes")
const connection= require('./connection')

const PORT = 8000;
const url= "mongodb://127.0.0.1:27017/Collage-data"
const app = express();
// connection 
connection(url) 

app.use(express.urlencoded({ extended: false }))
app.use('/api/students', studentRoutes)



app.listen(PORT, () => {
    console.log("Server is running...");
});
