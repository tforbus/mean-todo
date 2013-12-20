var TodoItem = require('../models/item');


module.exports = function(app) {

  app.get('/', function (req, res) {
    res.render('index');
  });


  app.get('/api/todo', function (req, res) {
    TodoItem.find({}, function (err, dbItems) {
      if (err) { res.send(500, {error: err}); }
      res.send(200, dbItems);
    });
  });


  app.get('/api/todo/:id', function (req, res) {
    TodoItem.findById(req.params.id, function (err, dbItem) {
      if (err) { res.send(500, {error: err}); }
      res.send(200, dbItem);
    });
  });


  app.post('/api/todo', function (req, res) {
    var item = req.body;
    TodoItem.create(item, function (err, dbItem) {
      if (err) { res.send(500, {error: 'Could not create the item.'}); }
      res.send(200, dbItem);
    });
  });


  app.put('/api/todo/:id', function (req, res) {
    var item = req.body,
        id = req.params.id;
    delete item._id;

    TodoItem.findByIdAndUpdate(id, item, function (err, dbItem) {
      if (err) { res.send(500, {error: 'Could not update the item.'}); }
      res.send(200, dbItem);
    });
  });



  app.delete('/api/todo/:id', function (req, res) {
    var id = req.params.id;
    TodoItem.findByIdAndRemove(id, function (err, dbItem) {
      if (err) { res.send(500, {error: err}); }
      res.send(204, dbItem);
    });
  });

};
