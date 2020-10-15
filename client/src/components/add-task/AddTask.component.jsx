import React, {useState} from 'react';

import './AddTask.style.css';

import { FaPlusCircle } from 'react-icons/fa';

function AddTask({onSubmit}) {
    const [task, setTask] = useState('');

    const sendTask = () => {
        onSubmit(task);
        setTask('');
    }

    return(
        <div className="add-task">
            <input
                type="text"
                className="task-input"
                placeholder="Nueva tarea..."
                value={task}
                onChange={(e) => { setTask(e.target.value)}}
            />
            <button className="task-submit" onClick={sendTask}>
                Agregar Tarea <FaPlusCircle size="1.5em" className="add-icon" />
            </button>
        </div>
    )
}

export default AddTask;