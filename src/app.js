const express = require('express');
const db = require('./utils/database');
const initModels = require('./models/initModels');
const userRoutes = require('./routes/user.route');
const todoRoutes = require('./routes/todo.route');
const PORT = 8000;
// const cors = require('cors');
// const morgan = require('morgan');

initModels();
const app = express();

// app.use(cors());
// app.use(morgan('dev'));
app.use(express.json());

db.authenticate()
    .then( () => console.log('conexion success') )
    .catch( (error) => console.log(error) )

db.sync()
    .then( () => console.log('sync success') )
    .catch( (error) => console.log(error) )

app.use(userRoutes);
app.use(todoRoutes);

app.get('/', (req, res) => {
    res.send('welcomw to my API')
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})