const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config({
    path: '../.env',
});

const morgan = require('morgan');

const winston = require('./config/winston');

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('combined', { stream: winston.stream }));
app.use(require('./routes/mentorLogin'));
app.use(require('./routes/mentorSignup'));

app.listen(process.env.MENTOR_PORT, () => winston.log('info', `Magic happens on port ${process.env.MENTOR_PORT}`));

module.exports = app;