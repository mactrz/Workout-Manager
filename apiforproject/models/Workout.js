const { Schema, model } = require('mongoose');

const workoutSchema = new Schema({
    title: String,
    description: String,
    creationDate: Date,
    days: Array,
    exercises: [{ type: Schema.Types.ObjectId, ref: 'Exercise' }]
});

module.exports = model('Workout', workoutSchema);