var bodyParser = require('body-parser');
var mongoose = require('mongoose');


//connect to database
mongoose.connect('mongodb://localhost/todo');

//create a schema
var todoSchema = new mongoose.Schema({
  typeOfTest: String,
  description: String
});

var Todo = mongoose.model('Todo', todoSchema);


var urlencodedParser = bodyParser.urlencoded({ extended: false })

module.exports = function(app){
  //homepage
  app.get('/', function(req,res){
      res.render('index');
  });


  app.get('/todo', function(req,res){
    //get data from mongoDB and pass it to the view
    Todo.find({}, function(err, data){
      if (err) throw err;
      res.render('checklist-main', {todos: data});
    });
  });


  app.post('/todo', urlencodedParser, function(req,res){
    //get data from the view and add it to mongoDB
    var newTodo = Todo(req.body).save(function(err, data){
      if (err) throw err;
      res.render('checklist-main', {todos: data});
      console.log('item was saved');
    });

  });


/*
  app.delete('/todo/:item', urlencodedParser, function(req,res){
    //delete requested item from mongoDB
    Todo.find({item: req.params.item.replace(/\-/g, " ")}).remove(function(err, data){
      if (err) throw err;
      res.render('checklist-main', {todos: data});
      console.log('item was deleted');
    });
  });
*/

};
