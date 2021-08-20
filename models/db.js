const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb://localhost/feedbackdb', function(err)
	{
		if (err) throw err;
		console.log("Mongodb Database my db connected")
		
	});


var Product = require('./form.model')