const routes = require('express').Router();
const sequelize = require('../db');
const customer = require('../controller/customer')(sequelize);
routes.post('/addCustomer',customer.addCustomer);
module.exports =routes;