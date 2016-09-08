
app.filter('showComp', function(){
    return function(todos,showCompleted) {
        var results = [];
        todos.forEach(function(todo){
            if (!todo.completed || showCompleted) {
                results.push(todo);
            }
        });

        return results;
    }


});