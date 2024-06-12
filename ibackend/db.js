const mongoose = require('mongoose');
// const mongoUrl = "mongodb://localhost:27017";
const mongoUrl = "mongodb://127.0.0.1:27017/inotebook";

mongoose.set("strictQuery", false);
const connectToMongo = () => {
    mongoose.connect(mongoUrl, () => {
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = connectToMongo;
