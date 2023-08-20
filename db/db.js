const mongoose = require("mongoose");

const connectDb  =   async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB connection SUCCESS");
        console.log("mongo connected to",mongoose.connection.host);
    } catch (error) {
        console.log("MongoDB connection FAIL");
        process.exit(1);
    }
};

module.exports = { connectDb };