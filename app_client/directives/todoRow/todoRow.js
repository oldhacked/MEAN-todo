
app.directive('taskrow', function(){
//    return {
//        restrict : 'A',
//        templateUrl : "/directives/todoRow/todo.template.html",
//        scope : {
//            data : "=",
//            removeme : "=",
//            edit : "="
//        },
//
//        link : function($scope,$element,$attr){
//            if ($scope.data.completed === true) {
//                $element.css('text-decoration', 'line-through');
//                $element.css('color', 'grey');      
//            } 
//
//            $scope.update = function(todo) {
//                $scope.todoCopy = angular.copy(todo);
//                var $inputRow = 
//                    '<table class="table">' +
//                    '<tr>' +
//                    '<td>' + 
//                    '<input type="text" class="form-control" ng-model="todoCopy.task" />' +
//                    '</td>' +
//                    '<td>' + 
//                    '<button ng-click="save(todoCopy)" class="btn btn-primary">Save</button>' +
//                    '</td>'+
//                    '<td>' + 
//                    '<button ng-click="cancel()" class="btn btn-primary">Cancel</button>' +
//                    '</td>' +
//                    '</tr>'+
//                    '</table>'
//                var compiledRow = $compile($inputRow)($scope);
//                editForm = compiledRow;
//                //                $('#editForm').append(compiledRow)
//                $element.after(compiledRow);
//            }
//
//            $scope.cancel = function(){
//                if (editForm != null) {
//                    editForm.remove(editForm);
//                    editForm = null;
//                }
//            }
//
//            $scope.save = function(todo){
//                $scope.edit(todo);
//                editForm.remove();
//                editForm = null;
//                $scope.todoCopy = {};
//            }
//
//        }
//
//
//    }
//

});

