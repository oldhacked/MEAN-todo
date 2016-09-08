var mongoose = require('mongoose');
var Schema = mongoose.Schema;




var todoSchema = new Schema({
 
    
    task: {type: String, required: true, maxlength : 100},
    completed: {type : Boolean},
});




var todo = mongoose.model('Todo', todoSchema);

module.exports = todo;

