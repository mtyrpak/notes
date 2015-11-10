notesApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/notes');
    $stateProvider
        
        //Home Page that shows list of notes
        .state('notes', {
            url: '/notes',
            params: {
            	pageTitle: 'Notes List'
            },
            templateUrl: 'source/templates/notes-list.html',
			controller: 'notesController'
        })
		
		//Page for note detail
        .state('detail', {
            url: '/detail',
            params: {
            	pageTitle: 'Note Detail',
            	id: null
            },
            templateUrl: 'source/templates/note-detail.html',
            controller: 'notesDetailController',
            parent: 'notes'
        })
        //Form used to create new note
        .state('create', {
            url: '/create',
            params: {
            	pageTitle: 'Create Note'
            },
            templateUrl: 'source/templates/note-create.html',
            controller: 'notesDetailController'
        });
        
});
