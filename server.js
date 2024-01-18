const express = require('express');
const app = express();

require('dotenv').config({path: './config/.env'});

app.set('view engine', 'ejs');
app.use(express.static('public'));

//body parsing-may not need
app.use(express.json());

app.use(logger("dev"));

//Server Running
app.listen(process.env.PORT, () => {
    console.log("Server is running, you better catch it!");
});