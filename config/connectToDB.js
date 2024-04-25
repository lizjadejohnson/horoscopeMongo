//Responsible for connecting the Mongoose DB to the Express Server Application
require("dotenv").config()

const mongoose = require("mongoose")

const connectToDB = async() => {
    await mongoose.connect(process.env.DB_URL)
    // This is how the app connects to our database
    console.log("Currently connected to MongoDB Cluster")
}

module.exports = connectToDB