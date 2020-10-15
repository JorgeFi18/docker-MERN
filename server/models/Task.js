const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    description: String,
    completed: Boolean,
    createdAt: Date,
    updatedAt: Date
});

module.exports.Task = new mongoose.model('Task', taskSchema);