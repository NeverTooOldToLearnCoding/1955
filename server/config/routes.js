var mainController = require('../controllers/mainController');

module.exports = function(app){

//retrieve all documents
app.get('/', mainController.index);

//retrieve 1 document with name
app.get('/:name', mainController.view);

// create  
app.get('/new/:name', mainController.create);


//delete 
app.get('/remove/:name', mainController.destroy);
}