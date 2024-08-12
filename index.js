const express =  require ('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const bodyParser = require('body-parser');

require('dotenv').config();

const mongoString = process.env.DATABASE_URL;
mongoose.connect(mongoString);
const database = mongoose.connection;

const app = express();
const port = 3000;

app.use(bodyParser.json())
app.use('/api', routes)
app.get('/', (req, res) => {
    res.send('Hello world!')
})

app.listen(port, () => {
    console.log(`API running on port ${port}.`)
})

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

