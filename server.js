const express = require('express');
const app = express();
const cors = require("cors");
const path = require('path')
require('dotenv').config({path: './config/.env'});
const stripe = require('stripe')(process.env.STRIPE_KEY);

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credentials', true)
    next();
}
app.use(allowCrossDomain);
app.use(
    cors({
      origin: "https://clarityrelationships.com",
    })
)

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.static(path.join(__dirname, '/public')))

//body parsing
app.use(express.json());

// create the items that can be purchased
const storeItems = new Map([
//   [1, { priceInCents: 0, name: "TEST 01" }],
  [1, { priceInCents: 14900, name: "Master Class" }],
  [2, { priceInCents: 29900, name: "Private Session" }]
])

// create checkout session
app.post('/create-checkout-session', async (req,res) => {
    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'payment',
            invoice_creation: {
                enabled: true,
            },
            line_items: req.body.items.map( item => {
                const storeItem = storeItems.get(item.id)
                return {
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: storeItem.name,
                        },
                        unit_amount: storeItem.priceInCents,
                    },
                    quantity: item.quantity,
                }
            }),
            success_url: `https://clarityrelationships.com/success.html`,
            cancel_url: `https://clarityrelationships.com/cancel.html` 
            // success_url: `${process.env.SERVER_URL}/success.html`,
            // cancel_url: `${process.env.SERVER_URL}/cancel.html` 
        })
        res.json({ url: session.url })
    } catch (e) {
        res.status(500).json({ error: e.message })
    }
})


app.get('/', (req,res)=>{ 
    res.render('index')
})

//Server Running
app.listen(process.env.PORT || PORT, () => {
    console.log("Server is running, you better catch it!");
});