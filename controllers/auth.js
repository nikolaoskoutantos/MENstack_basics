const asyncHandler = require('../middleware/async');
const user_schema = require('../models/User');




//POST url/auth/ || url/auth/api and respond with Password Hash
//      and the users token
exports.auth = asyncHandler(async (req , res , next) => {

    const {username , password , email , role ,name, status, resetPasswordToken }  = req.body;
        
   const user = await user_schema.create({
        username,
        password,email,
    resetPasswordToken 
   }); 

   const token = user.getSignedToken();
    
     res.status(200).json({data:user , token:token});   


      

        
         
});


//POST url/auth/login to login user

exports.login = asyncHandler(async (req , res , next) => {
  
  //Take the needed values from request
  const {username , password , email}  = req.body;
      
  //Validate  username and password
  if(!username || !password){
    console.log('egine malakia');
    } 

  //Check for user
  const user = await user_schema.findOne({username}).select('+password');

  if(!user){
    console.log('No user like that');
    res.end('No user like that');
    return 0;
    
  }  

  //Compare Passwords
  const ismatch = await user.matchPassword(password );
  if(!ismatch){
    console.log('invalid credentials')
    res.end('Invalid Credentials');
  }
  
  
  
else{
  
 sendtokenresponse(user , 200 , res); 
  }       
});




//Get token from model and create cookie and send response
const sendtokenresponse = (user , statuscode , res ) => {
  const token = user.getSignedToken();

  const options ={
    expires : new Date(Date.now + process.env.JWT_EXPIRE_COOKIE  *60 *60 *1000),
    httpOnly:true
  }
  res.status(statuscode)
  .cookie('token' , token , options)
  .json({succes:true, token});
}

exports.entry = asyncHandler(async (req,res,next) =>{


const {username} = req.body;

//const user = await user_schema.find({username:username});
//res.json(user);
});