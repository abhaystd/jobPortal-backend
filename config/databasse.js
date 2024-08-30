const mongoose = require('mongoose');

require('dotenv').config();
exports.connect = () => {
    // mongoose.connect("mongodb://localhost:27017/job-portal")
    mongoose.connect(process.env.mongoDB_Connect_URI)

        .then(() => {
        console.log('MongoDB connected successfully');
        })
        .catch((error) => {
        console.error('Error connecting to MongoDB:', error.message);
    });
}
