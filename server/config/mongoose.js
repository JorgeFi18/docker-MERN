const mongoose = require('mongoose');
const {
    DATABASE_HOST,
    DATABASE_NAME,
    DATABASE_PORT
} = process.env;

//mongoose.connect(`mongodb://localhost:27017/so-final`, {
mongoose.connect(`mongodb://${DATABASE_HOST}:${DATABASE_PORT}/${DATABASE_NAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    connectTimeoutMS: 10000,
})
    .then(() => console.log('Connected to mongoDB'))
    .catch(err => console.log(err));

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', () => {
    'Connected to Database!'
});