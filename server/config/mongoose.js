const mongoose = require('mongoose');
const {
    DATABASE_HOST,
    DATABASE_NAME,
    DATABASE_PORT,
    IS_DOCKERIZED
} = process.env;

const dbUrl = IS_DOCKERIZED ?
    `mongodb://${DATABASE_HOST}:${DATABASE_PORT}/${DATABASE_NAME}` :
    'mongodb://localhost:27017/so-final';

mongoose.connect(dbUrl, {
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