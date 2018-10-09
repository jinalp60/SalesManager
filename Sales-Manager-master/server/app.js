var express = require('express');
var app = express();
var server=require('http').createServer(app);

/*authentication*/
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
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
  res.header("Access-Control-Allow-Headers", "*");
  //res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
//app.use(expressJwt({secret: 'todo-app-super-shared-secret',credentialsRequired: false}).unless({path: ['/api/auth']}));
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
app.post('/addClient',
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
        
});
app.post('/sellProduct',
    [check('phoneNo').isLength({ min: 2 })],
    function(req,res){
        console.log("inside add client");
        const errors=validationResult(req);
        if(!errors.isEmpty()){
            return res.status(422).json({ errors: errors.array() });
        }
        else{
            console.log("Client:",req.body);
            db_api.insert_sell_product_data(req.body).then(function(result){
                console.log(result.affectedRows," rows inserted");
                res.status(200).json({message:result.affectedRows+" rows inserted"});
            });
        }
        
});

app.get('/fetchProductDetails',function(req,res){
        
    db_api.fetch_product_details().then(function(data){
        console.log("results of search query:",data);
        res.status(200).json({result:data});
    });
        
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
            db_api.search_product_by_name(redis,req.query.productName).then(function(data){
                console.log("results of search query:",data.productName);
                res.status(200).json({result:data.productName});
            });
        }
});

app.post('/api/auth', function(req, res) {
    const body = req.body;
    console.log("bosy:",body);
    /*const user = USERS.find(user => user.username == body.username);
    if(!user || body.password != 'todo') return res.sendStatus(401);*/
    if(body.username=='admin' && body.password=='admin'){
        console.log("success if");
        var token = jwt.sign({userID: 1}, 'todo-app-super-shared-secret', {expiresIn: '2h'});
        res.send({token});
    }
    else{
        console.log("else error");
        res.sendStatus(401);
    }
    
    
  });
/* fresh code
app.post('/api/auth', function(req, res) {
  const body = req.body;

  const user = USERS.find(user => user.username == body.username);
  if(!user || body.password != 'todo') return res.sendStatus(401);
  
  var token = jwt.sign({userID: user.id}, 'todo-app-super-shared-secret', {expiresIn: '2h'});
  res.send({token});
});
*/
/*
io.on('connection', function (client_1) {
    client = client_1;
    
    //io.sockets.emit('json', JsonFileName);
});
*/
server.listen(8000);
db_api.connect_db();
console.log("connected to server");