const router = require('express').Router();
const { qtest , home , user , 
getusers} = require('../controllers/index');


//ME COntroller
router.route('/querytest')
        .get(qtest);
        
    


//Aplo route pou xeirizetai parameter
router.get('/api/:id' , function(req ,res) {
    console.log(req.params.id);
    res.end('OK');
});


//Me controller pou kanei render 
router.route('/home')
.get(home);


//Simple Route
router.get('/' , function(req , res){
    res.end('Hello')
})
//Post request me controller
router.route('/user')
.post(user);

router.route('/getusers')
.get(getusers);


module.exports= router;