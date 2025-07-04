import mongoose from "mongoose";
const handleDBconnection = async(url)=>{
    await mongoose.connect(url);
}
export {handleDBconnection}