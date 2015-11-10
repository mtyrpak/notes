notesApp.directive('loadingSpinner', function ($http) {
    return {
        restrict: 'A',
        replace: true,
		templateUrl: 'source/templates/spinner.html',
        link: function (scope, element, attrs) {

            scope.$watch('activeCalls', function (newVal, oldVal) {
                if (newVal === 0) {
                    $(element).hide();
                }
                else {
                    $(element).show();
                }
            });
        }
    };
});

notesApp.config(['$httpProvider', function ($httpProvider) {
    $httpProvider.interceptors.push(function ($q, $rootScope) {
        if ($rootScope.activeCalls === undefined) {
            $rootScope.activeCalls = 0;
        }

        return {
            request: function (config) {
                $rootScope.activeCalls += 1;
                return config;
            },
            requestError: function (rejection) {
                $rootScope.activeCalls -= 1;
                $rootScope.$broadcast('message', {message: 'COMMUNICATION_ERROR', type: 'error'});
                return rejection;
            },
            response: function (response) {
                $rootScope.activeCalls -= 1;
                return response;
            },
            responseError: function (rejection) {
                $rootScope.activeCalls -= 1;
                $rootScope.$broadcast('message', {message: 'COMMUNICATION_ERROR', type: 'error'});
                return rejection;
            }
        };
    });
}]);