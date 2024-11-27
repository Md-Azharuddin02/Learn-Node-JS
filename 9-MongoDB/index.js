const express = require("express");
const mongoose = require('mongoose');

const PORT = 8000;
const app = express();

app.use(express.urlencoded({ extended: false }))

mongoose
    .connect("mongodb://127.0.0.1:27017/Collage-data")
    .then(() => console.log("DB connected"))
    .catch(() => console.log("DB not connected"));
const studentsSchema = new mongoose.Schema({
    rollNumber: {
        type: String,
        require: true,
        unique: true,
    },
    firstName: {
        type: String,
        require: true,
    },
    lastName: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
});

const studentsModel = mongoose.model("studentsModel", studentsSchema);


//Create Retrive Update, and delete students details
app
    .route("/api/students")
    //Get all user details
    .get(async(req, res) => {
        try {
            const data= await studentsModel.find({})
            return res.status(200).send(data)
        } catch (error) {
            return res.status(400).send(`something went wrong ${error}`)
        }
    })
    //Create students details
    .post(async(req, res) => {
        try {
            const body = await req.body
            const result= await studentsModel.create({
                rollNumber: body.roll_number,
                firstName:body.first_name,
                lastName:body.last_name,
                email:body.email
            })
           return res.status(201).send(result)

        } catch (error) {
            return res.status(400).send(`User creation error as ${error}`)
        }
    });


    //Find the student by Id
    app.route('/api/students/:id')
    .get(async(req, res)=>{
      try {
          const student = await studentsModel.findById(req.params.id)
          if(!student) return res.status(404).json("Not found")
          return res.status(200).json(student)
      } catch (error) {
        return res.status(400).json(`something went wrong ${error}`)
      }
    })
    //update the staudent details
    .patch(async(req, res)=>{
        const data= req.body
        console.log(data.email)
      try {
          await studentsModel.findByIdAndUpdate(req.params.id,{
              email: data.email
          })
          return res.status(200).json("Updated successfully")
          
      } catch (error) {
        return res.status(400).json(`something went wrong ${error}`)
      }
    })

    //Delete the student details
    .delete(async(req, res)=>{
        try {
            await studentsModel.findByIdAndDelete(req.params.id)
            return res.status(200).json("Deleted Successfully")
        } catch (error) {
          return res.status(400).json(`something went wrong ${error}`)
        }
      })


app.listen(PORT, () => {
    console.log("Server is running...");
});
