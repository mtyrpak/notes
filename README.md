### Notes Application

To prepare environment for this application install NodeJS (tested with version 5.0). Go to project directory and run.
```
npm install
```
To start HTTP server use command. It will start local web server on port 9000.
```
node server.js
```
Build of application is performed using gulp.
```
gulp build
```
Before tests are started start webdriver manager and then start tests use following command:
```
webdriver-manager
gulp test
```
or 
```
protractor test\conf.js
```
