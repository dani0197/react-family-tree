const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    userName: String,
    imgURL: String,
    children: [{ type: Schema.Types.ObjectId, ref: 'child' }]
});

const Person = mongoose.model('person', personSchema)
module.exports = Person;