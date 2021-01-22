const { Schema, model } = require('mongoose');

const workoutDoneSchema = new Schema({
    difficulty: Number,
    rating: Number,
    registerDate: Date,
    time: Number,
    workout: { type: Schema.Types.ObjectId, ref: 'Workout' }
});

module.exports = model('WorkoutsDone', workoutDoneSchema);