notesApp.controller('messagesController', function($scope, $rootScope, $state, $stateParams, $translate, $filter) {
    	
	 var unbind = $rootScope.$on('message', function(data, args) {
		 var type  = 'success';
		 if (args.type == 'error') {
			 type = 'danger';			 
		 }
		 var timestamp = $filter('date')(new Date(), 'dd.MM.yyyy HH:mm:ss');
		 var msgElement = angular.element('<div class="alert alert-' + type + '">' +
				 '<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>' +
				 timestamp + ': ' + $translate.instant(args.message) + '</div>');
		 angular.element(document.getElementById("messages")).append(msgElement);
		
     });

     $scope.$on('$destroy', unbind);
});
