const express = require('express');
const router = express.Router({mergeParams: true});
const { Types } = require('mongoose');

const Exercise = require('../models/Exercise');
const Workout = require('../models/Workout');

router.get('/', async (req, res) => {
  try {
    const get = await Workout.find()
    return res.send(get);
  }
  catch(err) {
    console.log(err);
    return res.send({err});
  }
});


router.get('/:id', async (req, res) => {
  try {
    const found = await Workout.findById(req.params.id)
    return res.send(found);
  }
  catch(err) {
    console.log(err);
    return res.send({err});
  }
});

router.post('/', async (req, res) => {
    const now = new Date()
    const workout = new Workout({
      ...req.body,
      creationDate: now
    })

    try {
      const createdWorkout = await workout.save()
      return res.send(createdWorkout);
    }
    catch(err) {
      console.log(err);
      return res.send({err});
    }
});

router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const deleted = await Workout.findByIdAndDelete(id)
    return res.send({
      deletedworkout: deleted
    });
  }
  catch(err) {
    console.log(err);
    return res.send({err});
  }
});


module.exports = router;
