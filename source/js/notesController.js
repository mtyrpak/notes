notesApp.controller('notesController', function($scope, $state, $stateParams, $translate, notesService) {
    $scope.notes = {};
    $scope.pageTitle = $stateParams.pageTitle;
        
    $scope.reload = function() {
    	$scope.notes = notesService.query();
    };
    
    $scope.onSelect = function(id) {
		$state.go('detail', {'id': id});
	};	
	
	$scope.reload();
 
});
