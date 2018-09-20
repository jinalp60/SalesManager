var express = require('express');
var app = express();
var server=require('http').createServer(app);
/*var io = require('socket.io')(server);
var client;*/
//redis caching mechanism
var redisClient = require('redis').createClient;
var redis = redisClient(6379, 'localhost');

var db_api=require('./db_api');
//validation express-validator
const { check, validationResult } = require('express-validator/check');
const { query } = require('express-validator/check');

var bodyParser = require('body-parser');
app.use(bodyParser.json({
  parameterLimit: 100000,
  limit: 102410241024,
  extended: true
}));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.post('/addProduct',
    [check('productName').isLength({ min: 2 }),check('productId').isLength({ min: 1 })],
    function(req,res){
        const errors=validationResult(req);
        if(!errors.isEmpty()){
            return res.status(422).json({ errors: errors.array() });
        }
        else{
            console.log("Product:",req.body);
            db_api.insert_product_data(req.body).then(function(result){
                console.log(result.affectedRows," rows inserted");
                res.status(200).json({message:result.affectedRows+" rows inserted"});
            });
        }
        
});
app.get('/searchProductByName',
    [query('productName').isLength({min:2})],
    function(req,res){
        console.log("param:",req.query);
        const errors=validationResult(req);
        if(!errors.isEmpty){
            res.status(422).json({errors:errors.array()});
        }
        else{
            var json = '{"result":true, "count":42}';
            obj = JSON.parse(json);
            console.log(obj.count);
            db_api.search_product_by_name(redis,req.query.productName).then(function(data){
                console.log("results of search query:",data.productName);
                res.status(200).json({result:data.productName});
            });
        }
});
/*
io.on('connection', function (client_1) {
    client = client_1;
    
    //io.sockets.emit('json', JsonFileName);
});
*/
server.listen(8000);
db_api.connect_db();
console.log("connected to server");