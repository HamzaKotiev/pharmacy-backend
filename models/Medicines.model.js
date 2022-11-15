const mongoose = require('mongoose');

const medicineSchema = mongoose.Schema({
    title: String,
    text: String,
    price: Number,
    recipe: Boolean,
    drugcategoriesSchema: {
        type:  mongoose.SchemaTypes.ObjectId , 
        ref: 'Drugcategories'
    }
})

const Medicine = mongoose.model( 'Medicine', medicineSchema);

module.exports = Medicine