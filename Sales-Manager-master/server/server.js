//const Sequelize = require('sequelize');
const express = require('express');
const app = express();
const cors = require('cors');
const server=require('http').createServer(app);
const routes = require("./routes"); 


var bodyParser = require('body-parser');
app.use(bodyParser.json({
  parameterLimit: 100000,
  limit: 102410241024,
  extended: true
}));
app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  //res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

//  Connect all our routes to our application
app.use('/', routes);
//var redisClient = require('redis').createClient;
//var redis = redisClient(6379, 'localhost');


/*
const People = require('./dbmigration/models/people')(sequelize);
createPeople = async()=>{
    let result =await People.create({
        firstName: 'John',
        lastName: 'Hancock',
        email:'dgd'
      });
    console.log("result:",result);
}
createPeople();*/

server.listen(8000);
console.log("connected to server");