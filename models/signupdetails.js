const { default: mongoose } = require("mongoose")
const mangoose= require("mongoose")

const signupdata=new mangoose.Schema({
    UserName:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
   

})
const Userdetails=mongoose.model("registeredDetails",signupdata);
module.exports=Userdetails;