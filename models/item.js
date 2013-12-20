var mongoose = require('mongoose');

var TodoItemSchema = new mongoose.Schema({
  dateCreated: {type: Date, default: Date.now},
  description: {type: String},
  isDone: {type: Boolean, default: false}
});

var TodoItems = mongoose.model('todoitems', TodoItemSchema);
module.exports = TodoItems;
