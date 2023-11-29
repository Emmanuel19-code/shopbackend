import mongoose from "mongoose"



const notificationSchema = new mongoose.Schema({
    title:String,
    status:{
        type:String,
        default:"unread"
    },
    message:String,
    user_id:String
},{timestamps:true})



const notification = mongoose.model("notification",notificationSchema)
export default notification