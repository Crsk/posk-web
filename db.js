const mongoose = require('mongoose');
const URI = 'mongodb://localhost:27017/posk_sync';

mongoose.connect(URI, { useNewUrlParser: true })
    .then(() => console.log('db connected'))
    .catch(err => console.log(err));

module.exports = mongoose;