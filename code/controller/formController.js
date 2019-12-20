const express =  require('express');
var router = express.Router();
var bodyParser = require("body-parser")
var multer = require('multer')
var upload = multer()
require("../models/db");
var Form = require('../models/form.model')


router.post("/",function(req, res)
{
	console.log(req.body)
	var name = req.body.name;
	var phone = req.body.phone;
	var email= req.body.email;
	var rate = req.body.rate;
	var comment= req.body.comment;
	var newReview = {
		name:name,
		phone:phone,
		email:email,
		rate:rate,
		comment:comment,
	}
	var review = new Form(newReview)
	review.save(function(err,Form)
	{
		if (err) throw err;
		console.log("review saved in database")
		console.log(Form)
	})
	res.redirect('../contact')

})


module.exports = router;