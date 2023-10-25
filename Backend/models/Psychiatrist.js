const mongoose = require('mongoose');
const { Schema } = mongoose;

const PsychiatristSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    experience: {
        type: String,
        required: true,
    },
    age: {
        type: String,
        required: true,
    },
    degree: {
        type: String,
        required: true,
    },
    mobile: {
        type: Number,
        required: true
    },
    address: {
        type: String
    }
});

module.exports = mongoose.model('Psychiatrist', PsychiatristSchema);
