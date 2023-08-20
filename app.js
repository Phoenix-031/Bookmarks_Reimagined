const express = require("express");
const env = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");


const { message } = require("./functions/message");
const { NOT_FOUND, OK } = require("./functions/messageType");

//route imports
const authRoutes = require("./routes/auth.routes");

const app = express();

//environment variable or you can say constants
env.config();

// cors
app.use(cors());


// parse requests 
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));


//routes

// default route
app.get("/", (req, res) => {
    message(res, OK, "Welcome to the chrome extension api");
});

app.use('/auth', authRoutes)


// non existing routes
app.all("*", (req, res) => {
    message(res, NOT_FOUND, "Route does not exist");
});


// app listen 

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});


//export app for vercel

// module.exports = app;