//Import packages
const express = require('express');
const app = express();
const router = require('./routes/index');
const cookieparser = require('cookie-parser');
const router_auth = require('./routes/auth');
const errorhandler = require('./middleware/errorhandler');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

//Connect in Mongo
connectDB();


//Load from config
dotenv.config({path:'./config/conf.env'});
const Port = process.env.Port;


//Set View Engine 
app.set('view engine', 'hbs');
app.use(express.json());

//Set Cookies
app.use(cookieparser());

//Mount ROuters
app.use('/api', router);
app.use('/auth' , router_auth);


//MiddleWare for Error Handling
app.use(errorhandler);

//Make Uo the Server
app.listen(Port, function () { console.log('Server runnning on port %d ', Port)});

