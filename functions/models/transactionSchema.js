import mongoose from "mongoose";


const transactionSchema = new mongoose.Schema({
  payedby:{
    type:String
  },
  paymentType:{
    type:String
  }
  ,
  amount:{
    type:Number
  },
  orderid:{
    type:String
  },
  date:{
    type:Date,
    default:Date.now
  }
})

const transactions = mongoose.model("transactions",transactionSchema)

export default transactions