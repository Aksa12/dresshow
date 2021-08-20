const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
var formSchema = mongoose.Schema(
{
	name:
	{
		type:String,
		required:true,
	},
	phone:
	{
		type:String,
		required:true,
	},
	email:
	{
		type:String,
		required:true
	},
	rate:
	{
		type:String
	},
	comment:
	{
		type:String,
		required:true
	}

})
var Form = mongoose.model("Form",formSchema);
module.exports = Form;