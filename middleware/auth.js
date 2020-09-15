const jwt = require('jsonwebtoken');
const asynchandler = require('./async');
const user_schema = require('../models/User');


//Protect Routes
exports.protect = asynchandler(async (req, res, next) =>{
let token;
if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
    token = req.headers.authorization.split(' ')[1];

} 
/*
else if(req.cookies.token){
token = req.cookies.token

}*/

//Check if token exists
if(!token){
    res.end('Not authorized');
    return; 
}

try{
//Verify token 
const decoded = jwt.verify(token , process.env.JWT_SECRET);
console.log(decoded);
req.user = await user_schema.findById(decoded.id);
res.end(decoded.id);
next();
}catch(err){
return;
}

})
