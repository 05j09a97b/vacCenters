const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cookieParser = require('cookie-parser');


//Load env vars
dotenv.config({path:'./config/config.env'});

//connect to database
connectDB();

//route files
const hospitals = require('./routes/hospitals');
const auth = require('./routes/auth');
const app = express();


//add cookie parser
app.use(cookieParser());

//add body parser
app.use(express.json());
app.use('/api/v1/hospitals',hospitals);
app.use('/api/v1/auth',auth);

const PORT = process.env.PORT || 4000;
const server = app.listen(PORT,console.log('Server running in',process.env.NODE_ENV,'mode on port',PORT));

//handle unhandled promises rejections
process.on('inhandleRejection',(err,promise)=>{
    console.log(`Error: ${err.message}`);
    //Close Server & exit process
    server.close(()=>process.exit(1));
});
