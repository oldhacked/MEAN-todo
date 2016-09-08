app.factory('todoService', function ($http) {
    var messageCount = 0;

    
    var getTodos = function () {
        console.log("getting todos")
        return $http({
            method: 'GET',
            url: '/todos'
        })

    };

    var removeme = function (id) {
        console.log("destoying: " + id);
        return $http({
            method: 'DELETE',
            url: '/todos/' + id,
        })


    }

    var addTodo = function (todo) {
        console.log("adding todo: " + todo);
        return $http({
            method: 'POST',
            url: '/todos',
            headers: {
                'Content-Type': 'application/json'
            },
            data: todo
        })



    }

    var updatetodo = function (todo) {

        return $http({
            method: 'PUT',
            url: '/todos',
            headers: {
                'Content-Type': 'application/json'
            },
            data: todo
        })
        console.log(todo._id);

    }
    return {
        removeme: removeme,
        getTodos: getTodos,
        addTodo: addTodo,
        updatetodo: updatetodo
    };
});
