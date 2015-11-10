notesApp.factory('notesService', function($resource) {
  var url = 'http://private-9aad-note10.apiary-mock.com/notes/:id';
  return $resource(url, {}, {
	  edit: { method: 'PUT', url: url }
  	});
});
