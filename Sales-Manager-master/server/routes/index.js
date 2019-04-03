const routes = require('express').Router();
const productRoute = require('./productRoute');
const customerRoute = require('./customerRoute');

const auth = require('../utils/auth');
const validateToken = require('../middlewares/tokenValidation');

routes.post('/api/auth',auth);
routes.use('/product',validateToken,productRoute);
routes.use('/customer',validateToken,customerRoute);
module.exports = routes;