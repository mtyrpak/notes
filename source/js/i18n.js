notesApp.config(function ($translateProvider) {
	  $translateProvider.translations('en', {
	    TITLE: 'Notes Application',
	    TITLE_CREATE_NOTE: 'New Note',
	    TITLE_NOTES: 'Notes',
	    PAGE_HEADER: 'Notes',
	    BUTTON_LANG: 'Language',
	    BUTTON_LANG_EN: 'EN',
	    BUTTON_LANG_SK: 'SK',
	    TEXT: 'Text',
	    TEXT_LABEL: 'Text:',
	    ID: 'ID',
	    ID_LABEL: 'ID:',
	    CREATED_LABEL: 'Created:',
	    ACTION: 'Action',
	    SHOW_DETAIL: 'Show detail',
	    ENTER_TEXT: 'Enter the text of note',
	    SAVE: 'Save',
	    EDIT: 'Edit',
	    DELETE: 'Delete',
	    CLOSE: 'Close',
	    CANCEL: 'Cancel',
	    CREATE_NOTE: 'Create Note',
	    REFRESH: 'Reload',
	    SIGN_UP: 'Sign Up',
	    LOGIN: 'Login',
	    DELETED: 'Note has been deleted.',
	    SAVED: 'New note has been saved.',
	    EDITED: 'Note has been updated.',
	    DELETE_CONFIRM: 'Do you really want to delete this note?',
	    COMMUNICATION_ERROR: 'Error during communication with remote server.'
	  });
	  $translateProvider.translations('sk', {
	    TITLE: 'Aplikácia poznámky',
	    TITLE_CREATE_NOTE: 'Nová poznámka',
	    TITLE_NOTES: 'Všetky poznámky',
	    PAGE_HEADER: 'Poznámky',
	    BUTTON_LANG: 'Jazyk',
	    TEXT: 'Text',
	    TEXT_LABEL: 'Text:',
	    ID: 'ID',
	    ID_LABEL: 'ID:',
	    CREATED_LABEL: 'Vytvorené:',
	    ACTION: 'Akcia',
	    SHOW_DETAIL: 'Zobraziť detail',
	    ENTER_TEXT: 'Zadajte text poznámky',
	    SAVE: 'Uložiť',
	    EDIT: 'Upraviť',
	    DELETE: 'Zmazať',
	    CLOSE: 'Zavrieť',
	    CANCEL: 'Zrušiť',
	    CREATE_NOTE: 'Vytvoriť poznámku',	    
	    REFRESH: 'Obnoviť',
	    SIGN_UP: 'Registrácia',
	    LOGIN: 'Prihlásenie',
    	DELETED: 'Poznámka bola zmazaná',
	    SAVED: 'Nová poznámka bola uložená.',
	    EDITED: 'Poznámka bola upravená.',
	    DELETE_CONFIRM: 'Skutočne chcete vymazať zvolenú poznámku?',
	    COMMUNICATION_ERROR: 'Pri komunikácii so serverom sa vyskytla chyba.'
	  });	  
	  $translateProvider.preferredLanguage('en');
	  $translateProvider.fallbackLanguage('en');
	  $translateProvider.useSanitizeValueStrategy(null);
	});

notesApp.controller('i18nController', function($scope, $rootScope, $state, $stateParams, $translate) {   
	
    $scope.currentLanguage = $translate.use();
    
    $scope.changeLanguage = function(lang) {
	    $translate.use(lang);
	    $scope.currentLanguage = $translate.use();
	};

	$scope.getLangClass = function(lang) {
		if (lang == $scope.currentLanguage) {
			return 'active-language';
		} else {
			return '';
		}
	};
});
