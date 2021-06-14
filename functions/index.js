const functions = require("firebase-functions");
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51J1pIHSGHRgjOalgLCKwTKF7OOR6ymJvXab8u4WYKQu0zjg0ZtiKP8GGUZj6oPBJlsklfkJ7KViDbHBAgrAhk1cq004zu1q6hF');

// API

// App Config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API Routes
app.get('/', (req, res) => res.status(200).send('Hello World!')); 

app.post('/payments/create', async (req, res) => {
    const total = req.query.total;

    console.log('Payment Request Recieved BOOM! for this amount >>>' , total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, 
        currency: "inr",
      });
      
      res.status(201).send({
        clientSecret: paymentIntent.client_secret,
      });  
});

// Listen Command 
exports.api = functions.https.onRequest(app);

// http://localhost:5001/clone-bf994/us-central1/api