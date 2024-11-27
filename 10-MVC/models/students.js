const mongoose = require('mongoose');


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
module.exports = studentsModel



