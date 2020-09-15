const errorhandler = (err , req  , res , next) =>{
    console.log(err.name + err.message) ;
    console.log(err.stack)
    res.status(500).json({
        succes:false,
        error:err.message || 'Server Εrror'
    });
    
};

module.exports = errorhandler;