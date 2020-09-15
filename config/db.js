const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({path:'./config/conf.env'});

const connectDB = async() =>{
    const conn = await mongoose.connect(process.env.DB_CONNECTION, {
        useNewUrlParser : true,
        useCreateIndex:true,
        useFindAndModify:false,
        useUnifiedTopology:true
    });
  console.log('MongoDB Connected:' );       
}

module.exports = connectDB;  