const mongoose = require('mongoose');

const connectDB = async () => {
    //mongoose.set('StrictQuery',true);
    const conn = await mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
}

//option will be switched back to `false` by default in Mongoose 7
mongoose.set('strictQuery',true);
module.exports = connectDB;

//const conn = await mongoose.connect(process.env.MONGO_URI,{
    //useNewUrlParser: true,
    //useUnifiedTopology: true
//mongoose.set('StrictQuery',true);