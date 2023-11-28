import stripe from "../../../utils/stripe.js";

export const paymentforOrder =async (req,res)=>{
 // Use an existing Customer ID if this is a returning customer.
  const customer = await stripe.customers.create();
  const ephemeralKey = await stripe.ephemeralKeys.create(
    { customer: customer.id },
    { apiVersion: "2023-10-16" }
  );
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 1099,
    currency: "ghc",
    customer: customer.id,
    
  });

  res.json({
    paymentIntent: paymentIntent.client_secret,
    ephemeralKey: ephemeralKey.secret,
    customer: customer.id,
    publishableKey: "pk_test_qblFNYngBkEdjEZ16jxxoWSM",
  });
}



