'use strict';
module.exports= function (sequelize){
    return{
        addCustomer:require('./addCustomer')(sequelize),
       // fetchProductDetails:require('./fetchProductDetails')(sequelize)
    }
   
}