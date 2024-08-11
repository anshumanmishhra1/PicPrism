const mongoose = require("mongoose");

const connectDb = async (req, res) => {
    const connection = await mongoose.connect(process.env.MONGO_URI)
    if(connection.STATES.connected) return console.log("Datbase connected");
    if(connection.STATES.disconnected) return console.log("Database disconnected");
};

module.exports = {connectDb}