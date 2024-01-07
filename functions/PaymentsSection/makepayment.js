import stripe from "../utils/stripe.js";

export const paymentforOrder =async (req,res)=>{
  const {amount} = req.body
  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount,
    currency: "usd",
  });
  res.json({
    paymentIntent: paymentIntent.client_secret
  });
}



