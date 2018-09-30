const express = require('express');
const morgan = require('morgan');
const app = express();
const { mongoose } = require('./db');

app.use(morgan('dev'));
app.use(express.json());

app.use('/api/boletas', require('./routes/boleta.routes'));

app.listen(3000, () => {
    console.log('server initialized on port 3000');
});
