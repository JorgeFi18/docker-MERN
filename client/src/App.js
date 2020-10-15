import React, { useState, useEffect } from 'react';
import './App.css';

import Tasks from './components/tasks/Tasks.component';
import AddTask from './components/add-task/AddTask.component';
import {
  getTaskList,
  saveNewTask,
  completeTask,
  removeTask
} from './api/task';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasks();
  }, [])

  const getTasks = () => {
    getTaskList()
      .then(tasks => setTasks(tasks))
      .catch(err => console.log(err));
  }

  const addTask = (task) => {
    if(!task){
      return alert('El campo Nueva tarea es requerido');
    }
    saveNewTask(task)
      .then(response => {
        console.log(response);
        getTasks();
      })
      .catch(console.warn)
  }

  const disableTask = (taskId) => {
    completeTask(taskId)
      .then(response => {
        console.log(response);
        getTasks();
      })
      .catch(console.warn)
  }

  const deleteTask = (taskId) => {
    removeTask(taskId)
      .then(response => {
        console.log(response);
        getTasks();
      })
      .catch(console.warn)
  }

  return (
    <div className="App">
      <h1 className="App-header">Mi Agenda</h1>
      <AddTask onSubmit={addTask} />
      <Tasks
        tasks={tasks}
        onTaskCompleted={disableTask}
        onTaskDeleted={deleteTask}
      />
    </div>
  );
}

export default App;
