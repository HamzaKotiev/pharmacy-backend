const mongoose = require('mongoose')

const clientsSchema = mongoose.Schema({
    name: String,
    basket: [{type: mongoose.SchemaTypes.ObjectId , ref: 'Medicine'}],
    wallet: 15000,
    recipe: Boolean
});

const Client = mongoose.model('News', clientsSchema);

module.exports = Client;
