const express = require('express');
const app = express();
const path = require('path')
const stripe = require('stripe')(process.env.STRIPE_KEY);

require('dotenv').config({path: './config/.env'});

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.static(path.join(__dirname, '/public')))

//body parsing-may not need
app.use(express.json());

app.get('/', (req,res)=>{ 
    res.render('index')
})

//Stripe implementation
app.post('/create-checkout-session', async (req, res) => {
    //product creation
    const product = await stripe.products.create({
        name: 'T-shirt',
    });

    //price creation
    const price = await stripe.prices.create({
        product: product,
        unit_amount: 2000,
        currency: 'usd',
    });

    const session = await stripe.checkout.sessions.create({
      ui_mode: 'embedded',
      line_items: [
        {
          // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
          price: price,
          quantity: 1,
        },
      ],
      mode: 'payment',
      return_url: `http://localhost:${process.env.PORT}/return.html?session_id={CHECKOUT_SESSION_ID}`,
    });
  
    res.send({clientSecret: session.client_secret});
  });

  app.get('/session-status', async (req, res) => {
    const session = await stripe.checkout.sessions.retrieve(req.query.session_id);
  
    res.send({
      status: session.status,
      customer_email: session.customer_details.email
    });
  });

//Server Running
app.listen(process.env.PORT, () => {
    console.log("Server is running, you better catch it!");
});