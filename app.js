//dependencies
var express = require('express');
var app = express();
var checklistController = require('./controllers/checklistController.js')
//template viewer
app.set('view engine', 'ejs');

//static middleware
app.use('/assets', express.static('assets'));

//use controller checklist
checklistController(app);


//listen to the port
app.listen(3000);
console.log("hey you are listening to a port 3000");
