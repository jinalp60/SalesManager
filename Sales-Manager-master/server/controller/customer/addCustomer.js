/*app.post('/addClient',
    [check('clientName').isLength({ min: 2 }),check('phoneNo').isLength({ min: 1 })],
    function(req,res){
        console.log("inside add client");
        const errors=validationResult(req);
        if(!errors.isEmpty()){
            return res.status(422).json({ errors: errors.array() });
        }
        else{
            console.log("Client:",req.body);
            db_api.insert_client_data(req.body).then(function(result){
                console.log(result.affectedRows," rows inserted");
                res.status(200).json({message:result.affectedRows+" rows inserted"});
            });
        }
        
});*/

'use strict';
let Customer;
module.exports = function(sequelize){
  Customer = require('../../models/customer')(sequelize);
  return addCustomer;
}
const addCustomer= async (req,res,next) =>{
    console.log("valid token");
    //const errors=validationResult(req);
    console.log("Customer:",req.body.newCustomer);
    let result =await Customer.create(req.body.newCustomer);
    //console.log("result:",result);
    res.status(200).json({message:"1 row inserted"});
   
}
