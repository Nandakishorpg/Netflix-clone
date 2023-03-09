const mongoose= require("mongoose");
mongoose.connect('mongodb+srv://nandakishor:nandakishor@cluster0.tvvwvil.mongodb.net/netflix?retryWrites=true&w=majority')

const UserRegisterSchema =new mongoose.Schema({
username:{type:String,required:true,unique:true},
email:{type:String,required:true,unique:true},
password:{type:String,required:true},
profilePic:{type:String,default:""},
isAdmin:{type:Boolean,default:false}
},
{timestamps:true}
)


module.exports=mongoose.model("UserRegister",UserRegisterSchema)