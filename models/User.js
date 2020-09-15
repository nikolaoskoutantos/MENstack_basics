const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
//Define Collection Forms
const UserSchema = mongoose.Schema({
    
    username: {
        type: String,
        unique:true,
        required:true
    },
    password: {
        type: String,
        require,
        select:false
    },
    email: {
        type: String,
        require
    },
    role:{
        type:String,
        enum:['generator', 'load' ]
    },
    status:{
        type:String,
        enum:['online' , 'offline']
    },
    name: {
        type:String,
        require
    },
    resetPasswordToken : String,
    resetPasswordExpire:Date,
    dateRegistered: {
        type: Date,
        default: Date.now
    },
})
//take password as text and return it Hashed SHA256
UserSchema.pre('save' , async function(next){
const salt = await bcrypt.genSalt(10);
this.password = await bcrypt.hash(this.password , salt); 
});


//JWT token 
UserSchema.methods.getSignedToken = function(){
    return jwt.sign({id:this._id } , process.env.JWT_SECRET ,{
        expiresIn:process.env.JWT_EXPIRE

    } )
};
 

UserSchema.methods.matchPassword =  async function(enteredpassword) {
return await bcrypt.compare(enteredpassword , this.password);

};
module.exports = mongoose.model('Users', UserSchema)

