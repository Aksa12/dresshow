var express = require("express");

const formController = require('./controller/formController')
const scrapingController = require('./controller/scrapingController')

var bodyParser = require("body-parser")
var multer = require('multer')
var upload = multer()
var app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(upload.array())


app.use('/api/items', scrapingController);
app.use('/api/form', formController);

const cors = require('cors');
app.use(cors())
const port =  5000;
app.listen(port, ()=>console.log('server started on '+ port))