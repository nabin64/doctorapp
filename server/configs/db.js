
const mongoose = require('mongoose');

const color = require('colors')


const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URL);
        if (connection) {
            console.log(`Mongodb connected ${mongoose.connection.host}`.bgGreen.white);
        }

    } catch (error) {
        console.log((`Mongodb server Issue ${error}`.bgRed, white))
    }
}


module.exports = connectDB;