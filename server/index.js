const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

const { mongoose } = require('./database');
const { router } = require('./routes/employee.routes');

// Settings
app.set('port', process.env.PORT || '3000');
app.set("json spaces", 2);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));

// Routes
app.use('/api/employees', router);

//Starting the serve
app.listen(app.get('port'), () => {
    console.log(`App listening on port ${app.get('port')}!`);
});