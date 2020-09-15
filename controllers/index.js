const asyncHandler = require('../middleware/async');

//GET                  url/querytest?password=MA&username=kati
exports.qtest = asyncHandler(async (req , res , next) =>{
    /*const to = [
        {id:1 , lastname:'Nik'},
        {id:2 , lastname:'Nik'}
    ]
   
    */
   let query;
   query = req.query;
    const user_schema = require('../models/User');
    const user = await user_schema.find(query);
    

    res.end(JSON.stringify(
        {
            //data:to,
            count:user.length,
            data:user
            
        }
    ));

    
})
//GET                      url/home
//Setup Controllers , which called from routes to serve the Html
exports.home = (req ,res,next)=> {
    res.status(200);
    res.render('home'); 
}

//POST a user into collection
exports.user =asyncHandler(async (req , res , next) => {


    const user_schema = require('../models/User');
    await user_schema.create(req.body);
    res.end("ok");
    res.status(200);
    
    
});


    
//GET all users and respond them into json 
exports.getusers = asyncHandler(async (req , res, next) =>{

    
        const user_schema = require('../models/User');
        const dat = await user_schema.find();
        res.status(200).json({count:dat.length , data:dat});
    

    
});

