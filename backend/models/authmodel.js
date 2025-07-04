import mongoose from "mongoose";
const usersSchema = mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        default:"user"
    }
})

const UsersData = mongoose.model("Auths",usersSchema);
export default UsersData;