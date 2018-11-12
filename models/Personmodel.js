const mongoose = require('mongoose');
const Schema = mongoose.Schema

const personSchema = new Schema({
    userName: String,
    imgUrl: String,
    children: [{ type: Schema.Types.ObjectId, ref: 'child' }]
});

const Person = mongoose.model('person', personSchema)
module.exports = Person;