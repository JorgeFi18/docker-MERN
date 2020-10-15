import React from 'react';
import './Tasks.style.css';

import Task from '../task/Task.component';

function Tasks({tasks, onTaskCompleted, onTaskDeleted}){
    return (
        <div className="tasks-wrapper">
            {tasks.map((task, index) => (
                <Task
                    key={index}
                    task={task}
                    checkTask={onTaskCompleted}
                    onRemoveTask={onTaskDeleted}
                />
            ))}    
        </div>
    )
}

export default Tasks;