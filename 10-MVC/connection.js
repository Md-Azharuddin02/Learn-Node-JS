
const mongoose= require('mongoose')


async function connection(URL){
    return await mongoose.connect(URL)
    .then(() => console.log("DB connected"))
    .catch(() => console.log("DB not connected"));
}
module.exports=connection