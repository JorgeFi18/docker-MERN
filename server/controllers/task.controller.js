const { Task } = require('../models/Task');

module.exports.getTask = (req, res) => {
    Task.find((err, tasks) => {
        if(err){
            res.status(404).json({
                ok: false,
                error: 'No records found'
            });
        }
        res
        .status(200)
        .json(tasks);
    });
};

module.exports.saveTask = (req, res) => {
    const { description } = req.body;
    const newTask = new Task({
        description,
        completed: false,
        createdAt: new Date(),
        updatedAt: new Date()
    });
    
    newTask.save((err, newTask) => {
        if(err){
            res.status(500).json({
                ok: false,
                error: 'Something went wrong'
            })
        }
        res
        .status(200)
        .json({
            ok: true,
            message: 'Task created successfully',
            referenceId: newTask['_id']
        })
    });
}

module.exports.updateTask = (req, res) => {
    Task.findByIdAndUpdate(
        req.params.taskId,
        { $set: { completed: true }},
        (err, updatedTask) => {
            if(err) {
                res.status(500).json({
                    ok: false,
                    error: 'Something went wrong'
                })
            }
            res
                .status(200)
                .json({
                    ok: true,
                    message: 'Task updated successfully',
                    referenceId: req.params.taskId
                })
        }
    )
};

module.exports.deleteTask = (req, res) => {
    Task.findByIdAndDelete(
        req.params.taskId,
        (err, deletedTask) => {
            if(err) {
                res.status(500).json({
                    ok: false,
                    error: 'Something went wrong'
                })
            }
            res
                .status(200)
                .json({
                    ok: true,
                    message: 'Task deleted successfully',
                    referenceId: req.params.taskId
                })
        }
    )
}