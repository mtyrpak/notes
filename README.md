### Notes Application

To prepare environment for this application install NodeJS (tested with version 5.0). Go to project directory and run following command to install project dependencies
```
npm install
```
Build applicaiton using gulp.
```
gulp build
```
To start HTTP server use following command. It will start local web server on port 9000.
```
node server.js
```
Before tests are started you must start webdriver manager 
```
webdriver-manager start
```
and then you can start tests using following command:
```
gulp test
```
or 
```
protractor test\conf.js
```
