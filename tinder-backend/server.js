const express = require('express');
const mongoose = require('mongoose');
const Cards = require('./dbCards');
const cors = require('cors');
require('dotenv').config();

//App Config
const app = express();
const port = process.env.PORT || 8000;
const connection_url = process.env.CONNECTION_URI;

//Middleware
app.use(express.json());
app.use(cors());

//DB Config
mongoose.connect(connection_url,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

//API Endpoint
app.get('/', (req,res) => {
    res.status(200).send("Hello there!");
});



app.post('/tinder/cards',(req,res) => {
    let dbCard = req.body;

        Cards.create(dbCard,(error,response) => {
            if(error)
            {
                return res.status(500).send(error);
            }

            res.status(201).send(response);

        });
});

app.get('/tinder/cards',(req,res) => {


        Cards.find((err,data) => {
            if(err)
            {
                res.status(500).send(err);
            }

            else
            {
                console.log("data recieved");
                res.status(200).send(data);
            }

        });
})

//Listener
app.listen(port,() => {
    console.log(`listening on port ${port}`)
});