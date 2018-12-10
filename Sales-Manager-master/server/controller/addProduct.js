
const Sequelize = require('sequelize');
const sequelize = new Sequelize('salesmanager', 'postgres', 'root', {
    host: 'localhost',
    dialect: 'postgres',
  
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
  });
const Products = require('../models/products')(sequelize);
const addProduct= async (req,res,next) =>{
    //console.log(validateToken(req));
    console.log("valid token");
    //const errors=validationResult(req);
    console.log("Product:",req.body.newProduct);
    let result =await Products.create(req.body.newProduct);
    //console.log("result:",result);
    res.status(200).json({message:"1 row inserted"});

    
    // db_api.insert_product_data(req.body.newProduct).then(function(result){
    //     console.log(result.affectedRows," rows inserted");
    //     res.status(200).json({message:result.affectedRows+" rows inserted"});
    // });   
}

module.exports = addProduct;