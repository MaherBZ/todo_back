var mongoose = require ('mongoose')

mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost:27017/todoapp', {useNewUrlParser:true}, null);

module.exports={mongoose}
