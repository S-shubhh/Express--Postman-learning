const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://admin:nMwtTet9HmDQQOFh@cluster0.1dcnaye.mongodb.net/todos")
console.log("Db connected");
    const {Schema} = mongoose
    const todoSchema = new Schema({
        title: String,
        description: String,
        completed : Boolean
    })
    
    const todoModel = mongoose.model('todo', todoSchema);
    module.exports = {
        todoModel
    };