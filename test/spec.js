describe('Notes App Test', function() {

	var baseUrl = 'http://localhost:9000/';
	var waitForAjax = function() {
		var el = element(by.className('modal-backdrop'));
		browser.driver.wait(protractor.until.elementIsNotVisible(el));
	};
	
	var checkPageHeader = function(expected) {
		var h1 = element(by.tagName('h1'));
		expect(h1.getText()).toEqual(expected);
	}
	it('should have notes', function() {
		browser.get(baseUrl);
		expect(browser.getTitle()).toEqual('Notes Application');
		checkPageHeader('Notes');
		
		var notesList = element.all(by.repeater('note in notes'));
	    expect(notesList.count()).toEqual(2);
	    expect(notesList.get(0).getText()).toEqual('Jogging in park');
	});
	
	it('should display detail', function() {
		browser.get(baseUrl);
		
		var notesList = element.all(by.repeater('note in notes'));
		notesList.get(1).click();
		waitForAjax();
		
		element(by.className('btn-primary')).click();
		expect(element(by.tagName('textArea')).getText()).toEqual('Pick-up posters from post-office');		
		
	});
	
	it('should create new note', function() {
		browser.get(baseUrl);
		waitForAjax();
		var menu = element(by.css('a[ui-sref=create]'));
		menu.click();	
		checkPageHeader('New Note');
		element(by.tagName('textarea')).sendKeys('1234');
		
		element(by.tagName('button')).click();
		waitForAjax();
		
		checkPageHeader('Notes');
		var table = element(by.tagName('table'));
		
		var info = element(by.className('alert-success'));
		expect(info.isPresent()).toBeTruthy();
		
	});

});