var mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect(process.env.MONGODB_URI || process.env.MONGOOSE_CONNECT, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
}).then(() => {
	console.log('Connected to DB!');	
}).catch(err => {
	console.log('Error:', err.message);
});

mongoose.Promise = Promise;

module.exports.User = require("./user");
module.exports.Message = require("./message");