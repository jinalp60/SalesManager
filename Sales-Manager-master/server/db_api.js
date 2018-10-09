var mysql = require('mysql');
//var dateTime = require('node-datetime')
var moment = require("moment");
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
    insert_client_data:function(newClient){
        return new Promise(function(resolve,reject){
            var sql =   "INSERT INTO clients (clientName,phoneNo) VALUES ('"+newClient.clientName+"',"+newClient.phoneNo+")";
            con.query(sql, function (err, result) {
                if (err) {
                    reject();
                    throw err;
                }
                
                resolve(result);
                console.log("1 record inserted");
            });
        });
            
    },
    insert_sell_product_data:function(sellProduct){
        
        let sellDate=moment().format("YYYY-MM-DD");
        // let dt = dateTime.create();
        // let formatted = dt.format('Y-m-d');
        console.log("format:",sellDate);
        return new Promise(function(resolve,reject){
            var sql =   "INSERT INTO soldProducts (phoneNo,productName,quantity,sellingPrice,moneyPaid,sellDate) VALUES ("+sellProduct.phoneNo+",'"+sellProduct.productName+"',"+sellProduct.quantity+","+sellProduct.sellingPrice+","+sellProduct.moneyPaid+",'"+sellDate+"')";
            con.query(sql, function (err, result) {
                if (err) {
                    reject();
                    throw err;
                }
                
                resolve(result);
                console.log("1 record inserted");
            });
        });
            
    },
    fetch_product_details:function(){
        return new Promise(function(resolve,reject){
            var sql =   "SELECT * from products";
            con.query(sql, function (err, result) {
                if (err) {
                    reject();
                    throw err;
                }
                
                resolve(result);
                console.log("product details fetched");
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
