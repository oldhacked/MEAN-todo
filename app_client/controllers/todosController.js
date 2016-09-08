app.controller('todosController', function ($scope, todoService, $interval, $timeout) {
    $scope.greeting = "Todo";
    $scope.getTodos = todoService.getTodos;
    $scope.todos = [];

    $scope.loadData = function () {
        console.log("data loaded");
        $scope.getTodos()
            .then(function (response) {
                $scope.todos = response.data;
                console.log(response.data);
            });
    };

    $scope.loadData();

    $scope.newTodo = todoService.addTodo;
    $scope.removeme = todoService.removeme;
    $scope.updatetodo = todoService.updatetodo;

    $scope.newtask;
    $scope.addTodo = function (newtask) {
        console.log("new taks that was added");
        var todo = {
            task: newtask,
            completed: false
        };

        $scope.newTodo(todo);
        $scope.loadData();
        $scope.newtask = " ";

    }
//
//    var clearable;
//    var checking;
//
//    $scope.$watch(function () {
//        return $scope.todos.length;
//    }, function () {
//
//
//        console.log("todo list changed");
//
//        if ($scope.todos.length > 0) {
//            clearable = true;
//
//            console.log("clearable is true");
//        } else if ($scope.todos.length == 0) {
//            clearable = false;
//            console.log("clearable is false");
//        }
//
//
//        if (!checking) {
//            console.log("not checking");
//        }
//
//        if (clearable && checking == false) {
//            console.log("list is clearable");
//            checking = true;
//
//            $scope.clearlist = $interval(function () {
//
//                if (checking) {
//                    console.log("checking if server emptied list");
//
//                }
//
//                $scope.loadData();
//            }, 30000);
//
//        }
//
//        if (!clearable) {
//            $interval.cancel($scope.clearlist);
//
//
//            console.log("clearable not truthy. interval should be stoped");
//
//            checking = false;
//
//
//            $scope.test();
//
//        }
//
//
//    }, true);
//

    $scope.destroy = function (id) {
        console.log(id);
        $scope.removeme(id);
        $scope.loadData();
    };




    $scope.updatestat = function (todo) {




        console.log("updatestat: " + todo.completed);

        $scope.updatetodo(angular.copy(todo));
        $scope.loadData();
    };

    

    $scope.alrt = false;

    
    $scope.test = function () {
        console.log("test");
        $scope.alrt = true;
        $timeout(function () {
            $scope.alrt = false;
        }, 3000)
    };




    $scope.update = function (todo) {
        $scope.editForm = true;
        $scope.taskedit = angular.copy(todo);
    };

    $scope.save = function (todo) {


        $scope.updatetodo(angular.copy(todo));
        $scope.loadData();
        $scope.cancel();
    };


    $scope.cancel = function () {

        $scope.editForm = false;

        $scope.taskedit = "";


    };

    
    /////////LOGIC FOR DISPLAYING COMPLETED OR NOT COMPLETED//////////////
    $scope.showCompleted = false;

    $scope.numCompleted = function (tf) {
        var comp = 0;
        var nonComp = 0;
        $scope.todos.forEach(function (todo) {
            if (!todo.completed) {
                nonComp++;
            } else {
                comp++;
            }
        });
        if (tf == "true") {
            return comp;
        } else {
            if (nonComp <= 3) {
                $scope.alert = "chillin";
            }
            if (nonComp > 3 && nonComp < 5) {

                $scope.alert = "warning";
            } else if (nonComp > 5) {
                $scope.alert = "danger";
            }
            return nonComp;
        }
    }
});
