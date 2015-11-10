notesApp.controller('notesDetailController', function($scope, $rootScope, $state, $stateParams, $translate, notesService) {
    $scope.note = { title: ''};
    $scope.selected = {};
    $scope.edit = false;
    $scope.loadNote = function(id) {
    	$scope.note = notesService.get({'id': id});
    };
	
	$scope.onEdit = function() {
		$scope.edit = true;
	};
	
	$scope.onSave = function() {
		if ($scope.note.id === undefined) {
			notesService.save($scope.note, function() {
				$rootScope.$broadcast('message', {message: 'SAVED'});
				$state.go('notes');	
			});			
		} else {
			notesService.edit({'id': $scope.note.id}, $scope.note, function() {
				$rootScope.$broadcast('message', {message: 'EDITED'});
				$scope.edit = false;
			});
		}		
	};
	
	$scope.onDelete = function(id) {
		if (confirm($translate.instantiate('DELETE_CONFIRM'))) {
			notesService.delete({'id': id}, function(response) {
				$rootScope.$broadcast('message', {message: 'DELETED'});
				$state.go('notes');
			});
		}
		return false;
	};	
	
	$scope.hasNote = $stateParams.id !== undefined && $stateParams.id !== null;
        
    if ($scope.hasNote) {
    	$scope.loadNote($stateParams.id);
    }
    
});
