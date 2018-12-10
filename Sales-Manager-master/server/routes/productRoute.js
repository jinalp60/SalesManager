const routes = require('express').Router();
const addProduct = require('../controller/addProduct');
routes.post('/addProduct',addProduct);
module.exports =routes;