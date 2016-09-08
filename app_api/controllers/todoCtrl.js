var mongoose = require('mongoose');
var Todo = mongoose.model('Todo');

module.exports.create = function (req, res, next) {
    var t = new Todo({
        task: req.body.task,
        completed: req.body.completed
    });

    t.save(function (err, todo) {
        if (err) return next(err);
        res.status(201);
        res.json(todo);
        console.log("todo task added");
    });
};


module.exports.getAll = function (req, res, next) {
    Todo.find(function (err, todos) {
        if (err) return next(err);
        // Send data back
        res.json(todos);
    });
};


module.exports.dump = function (req, res, next) {
    console.log("dump rout hit. ");

    mongoose.connection.db.dropDatabase();
};

module.exports.destroy = function (req, res, next) {
    console.log("destroy rout hit. id received: " + req.params.id);
    Todo.find({
            _id: req.params.id
        })
        .remove(function (err, result) {
            console.error(err);
            if (err) return next(err);

            res.json(result);
            console.log("deleted" + result);


        })
};

module.exports.update = function(req,res,next){
  
    Todo.findByIdAndUpdate(
        req.body._id,
        // update
        {
            $set: 
            {
                task: req.body.task,
                completed: req.body.completed
            }
        },
        // options
        {
            safe : false, // write concern, slower if false, but safer
            upsert : false, // create new doc if none matches query (false, so don't)
            new : true // return updated document after $push
        },
        // callback
        function(err, newtodo) {
            if(err) return next(err);
            res.status(202); // Accepted
            res.json(newtodo); // return the updated obj
        }
    )
};


