const mongoose = require('mongoose');

const drugcategoriesSchema = mongoose.Schema({
    title: String
})

const Drugcategories = mongoose.model( 'Medicine', drugcategoriesSchema);

module.exports = Drugcategories