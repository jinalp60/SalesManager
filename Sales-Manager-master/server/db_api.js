var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "SalesManager"
});

var db_api={
    connect_db:function(){
        con.connect();
    },
    insert_product_data:function(newProduct){
        return new Promise(function(resolve,reject){
            var sql =   "INSERT INTO products (productId,productName,quantity,basePrice,minPrice,maxPrice) VALUES ('"+newProduct.productId+"','"+newProduct.productName+"',"+newProduct.quantity+","+newProduct.basePrice+","+newProduct.minPrice+","+newProduct.maxPrice+")";
            con.query(sql, function (err, result) {
                if (err) {
                    reject();
                    throw err;
                }
                
                resolve(result);
                //console.log("1 record inserted");
            });
        });
            
    },
    search_product_by_name:function(redis,productName){

        return new Promise(function(resolve,reject){
            redis.get(productName,function(error,data){
                if(error) {
                    reject();
                    throw error;
                }
                else if(data){
                    console.log("returning cached data",data);
                    resolve(JSON.parse(data));
                }
                else{
                    var sqlQuery="SELECT * FROM products WHERE productName = '"+productName+"'";
                    con.query(sqlQuery, function (err, result) {
                        if (err) throw err;
                        //we are assuming productname is gonna be unique
                        redis.set(productName,JSON.stringify(result[0]));
                        resolve(JSON.parse(result[0]));
                    });
                }
            });
            
        })
    }
};
module.exports=db_api;
