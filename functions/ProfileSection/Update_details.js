import user from "../models/userSchema";


export const updatedetails = async (req,res)=>{
  const uniqueId = req.user.uniqueId
  const data = req.body
  if(!data){
    return res.status(400).json({
        msg:"please provide the neccessary details"
    })
  }
  const update = user.findByIdAndUpdate(
    uniqueId,
    {
      $set: data,
    },
    { new: true }
  );
  if(!update){
    return res.status(400).json({
        msg:"could not change please try again"
    })
  }
  res.status(200).json({
    msg:"successfully updated"
  })
}