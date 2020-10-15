export const getTaskList = () => new Promise((resolve, reject) => {
    fetch('http://localhost:4000/task')
      .then(res => res.json())
      .then(tasks => resolve(tasks))
      .catch(err => reject(err));
});

export const saveNewTask = (task) => new Promise((resolve, reject) => {
    fetch('http://localhost:4000/task', {
      method: 'POST',
      body: JSON.stringify({
        description: task
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        resolve(res);
      })
      .catch(err => reject(err));
});

export const completeTask = (taskId) => new Promise((resolve, reject) => {
    fetch(`http://localhost:4000/disable/${taskId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
      .then(res => {
        resolve(res);
      })
      .catch(err => reject(err));
});

export const removeTask = (taskId) => new Promise((resolve, reject) => {
  fetch(`http://localhost:4000/delete/${taskId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
    .then(res => {
      resolve(res);
    })
    .catch(err => reject(err));
});