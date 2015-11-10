var connect = require('connect');
var serveStatic = require('serve-static');
console.log('Starting web server at port 9000');
connect().use(serveStatic('public')).listen(9000);