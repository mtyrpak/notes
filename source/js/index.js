var notesApp = angular.module('notesApp', ['ui.router', 'ngResource', 'pascalprecht.translate']);

notesApp.run(
	    ['$rootScope', '$state', '$stateParams',
	      function ($rootScope, $state, $stateParams) {
	          $rootScope.$state = $state;
	          $rootScope.$stateParams = $stateParams;
	      }
	    ]);