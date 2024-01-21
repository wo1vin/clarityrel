const express = require('express');
const app = express();
const path = require('path')
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');
require('dotenv').config({path: './config/.env'});

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.static(path.join(__dirname, '/public')))

//body parsing
app.use(express.json());

// create the items that can be purchased
// const product = await stripe.products.create({
//   name: 'masterclass',
//   object: 'product',
//   active: true,
//   "default_price": 149,
//   "description": "Intentional Dating Essentials",
// });

// const storeItems = new Map([
//   [i, { priceInCents: }]
// ])

app.get('/', (req,res)=>{ 
    res.render('index')
})

//Server Running
app.listen(process.env.PORT, () => {
    console.log("Server is running, you better catch it!");
});