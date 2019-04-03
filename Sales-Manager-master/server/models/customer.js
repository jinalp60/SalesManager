'use strict';
const Sequelize = require('sequelize');
module.exports = (sequelize) => {
  const customer = sequelize.define('customer', {
    customerName: Sequelize.STRING,
    phoneNumber: Sequelize.BIGINT,
    
  }, {
      freezeTableName: true
  });
  customer.associate = function(models) {
    // associations can be defined here
  };
  return customer;
};