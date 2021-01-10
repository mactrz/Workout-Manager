const express = require('express');
const router = express.Router({mergeParams: true});
const { Types } = require('mongoose');

const Exercise = require('../models/Exercise');
const Workout = require('../models/Workout');

router.get('/', async (req, res) => {
  var exercises = []
    try {
      const work = await Workout.findById(req.params.idWorkout);
      console.log(work.exercises)
      const kek = await Promise.all(work.exercises.map(async id => {
        const exe = await Exercise.findById(id)
        return exe
      }))
      return res.send(kek)
    }
    catch(err) {
      console.log(err);
      return res.send({err});
    }
  });


  router.get('/:id', async (req, res) => {
    try {
      const found = await Exercise.findById(req.params.id)
      return res.send(found);
    }
    catch(err) {
      console.log(err);
      return res.send({err});
    }
  });

router.post('/', async (req, res) => {
    const exercise = new Exercise({
      ...req.body,
      workout: req.params.idWorkout
    })

    try {
    const createdExercise = await exercise.save()
    await Workout.findByIdAndUpdate(req.params.idWorkout,
      { '$push': { 'exercises': createdExercise._id } },
        { 'new': true });

    return res.send(createdExercise);
    }
    catch(err) {
        console.log(err);
        return res.send({err})
    }
});

router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  try {
  const deleted = await Exercise.findByIdAndDelete(id)
  await Workout.findByIdAndUpdate(req.params.idWorkout, 
    { '$pull': { 'exercises': id } });
  return res.send({
    deletedpost: deleted
  });
}
catch(err) {
    console.log(err);
    return res.send({err})
}
});


module.exports = router;
