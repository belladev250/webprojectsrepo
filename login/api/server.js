const express= require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./route');
require('./schema/mongodb');// always require mongodb
const app= express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/api',router);


const port=6000;
app.listen(port,function(){
    console.log(" you are connecting on port"+port);
});

module.exports=app



