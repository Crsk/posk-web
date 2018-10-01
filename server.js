const express = require('express');
const morgan = require('morgan');
const app = express();
const { mongoose } = require('./db');
const cors = require('cors');

app.use(express.static('./public/dist/posk-web'));
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
app.use('/api/boletas', require('./routes/boleta.routes'));
app.use('/send', require('./routes/contact.routes'));
app.listen(3000, () => {
    console.log('server initialized on port 3000');
});
