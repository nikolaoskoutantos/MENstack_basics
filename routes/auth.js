const router_auth = require('express').Router();
const {auth , login , entry} = require('../controllers/auth');
const {protect} = require('../middleware/auth');

router_auth.route('/api') 
.post(auth);


router_auth.route('/') 
.post(auth);

router_auth.route('/login')
.post(login)


router_auth.route('/entry')
.post(protect , entry);
module.exports = router_auth;

