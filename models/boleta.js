const mongoose = require('mongoose');
const {Schema } = mongoose;

const BoletaSchema = new Schema({
    id: { type: Number, required: true }
});

module.exports = mongoose.model('Boleta', BoletaSchema);