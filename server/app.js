const express = require('express');
const app = express();
const port = 4000;
const bodyParser = require('body-parser');
const cors = require('cors')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json());
app.use(cors());

require('./config/mongoose');

const { getHealth } = require('./controllers/health.controller');
const {
    getTask,
    saveTask,
    updateTask,
    deleteTask
} = require('./controllers/task.controller');

app.get('/health', getHealth);

app.get('/task', getTask);
app.post('/task', saveTask);
app.put('/disable/:taskId', updateTask);
app.delete('/delete/:taskId', deleteTask);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});