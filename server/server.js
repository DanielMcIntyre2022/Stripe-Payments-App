require('dotenv').config();
const express = require('express');

const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000'
}))

const stripe = require('stripe')(process.env.STRIPE_KEY);

const storeItems = new Map([
    [1, { priceInCents: 10000, name: 'Testing Stripe Payments is easy!' }],
    [2, { priceInCents: 20000, name: 'Raptors Championship run!'}]
])

const PORT = process.env.PORT || 6000;

app.listen(PORT, () => console.log(`server running on ${PORT}`));