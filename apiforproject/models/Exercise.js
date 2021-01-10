const { Schema, model } = require('mongoose');

const exerciseSchema = new Schema({
    title: String,
    description: String,
    bodypart: String,
    difficulty: Number,
    workout: {type: Schema.Types.ObjectId, ref: 'Workout'}
});

module.exports = model('Exercise', exerciseSchema);