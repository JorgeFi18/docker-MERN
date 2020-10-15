import React from 'react';
import { DateTime } from "luxon"; 
import { FaCheckCircle, FaTrashAlt } from 'react-icons/fa';

import './Task.style.css';

function Task({task, checkTask, onRemoveTask}){

    const completeTask = () => {
        if(task.completed) {
            return
        }

        checkTask(task['_id']);
    }

    const removeTask = () => {
        onRemoveTask(task['_id']);
    }

    return (
        <div className="task">
            <section className="task-info">
                <small>
                    {DateTime.fromISO(task.createdAt).toLocaleString(DateTime.DATETIME_MED)}
                </small>
                <h2 className={task.completed ? 'completed-task' : null}>{task.description}</h2>
            </section>
            <section className="task-action">
                <FaCheckCircle
                    color={task.completed ? 'green' : 'gray'}
                    size="2em"
                    className="check"
                    onClick={completeTask}
                />
                { task.completed && 
                    <FaTrashAlt
                        color="gray"
                        size="2em"
                        className="delete"
                        onClick={removeTask}
                    />
                }
            </section>
        </div>
    )
}

export default Task;