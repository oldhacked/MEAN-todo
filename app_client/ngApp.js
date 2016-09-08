var app = angular.module('myApp', ['ngRoute'])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/home.view.html',
                controller: 'homeController'
            })
            .when('/todo', {
                templateUrl: 'views/todos.view.html',
                controller: 'todosController'
            })
            .otherwise({
                templateUrl: 'views/_404.view.html'
            });

        $locationProvider.html5Mode({
            enabled: true, // turn html5Mode on
            requireBase: true // require a '<base> tag'
        });

    });


//
//app.directive('completed', function(){
//    return {
//        restrict : 'A',
//        scope : {
//            data : "=",
//          
//        },
//
//        link : function($scope,$element,$attr){
//            if ($scope.data.completed === true) {
//                $element.css('text-decoration', 'line-through');
//                $element.css('color', 'grey');           } else{
//                    $element.css("text-decoration","none");
//                    $element.css("color", "black")
//                }
//
//        }
//        
//    
//        
//
//    }
////    
////    function taskNum($scope, $element, $attr, completed){
////        if($scope.data.competed ===)
////        
////    }
//            
//           
//
//});
//
//









//
//<tr ng-repeat="todo in todos | showComp:showCompleted | orderBy:'task'">
//    <td>{{todo.task}}</td>
//        <td><input type="checkbox" ng-model="todo.completed"/></td>
//            <td>{{todo.completed}}</td>
//                </tr>




//<div>
//    <button ng-click="[fname= '', mname='', lname= '']">Clear Name</button>
//        <input type="text" ng-model="fname" />
//            <input type="text" ng-model="mname" />
//                <input type="text" ng-model="lname" />
//                    <span ng-show="fname">Your name is: {{fname}}</span>
//                        <span ng-show="mname">{{mname}}</span>
//                            <span ng-show="lname">{{lname}}</span>
//                                </div>
