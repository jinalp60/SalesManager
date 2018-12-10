const routes = require('express').Router();
const productRoute = require('./productRoute');

const auth = require('../utils/auth');
const validateToken = require('../middlewares/tokenValidation');

routes.post('/api/auth',auth);
routes.use('/product',validateToken,productRoute);
module.exports = routes;