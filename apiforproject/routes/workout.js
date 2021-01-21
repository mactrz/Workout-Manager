const express = require('express');
const router = express.Router({mergeParams: true});
const { Types } = require('mongoose');
const axios = require('axios').default;

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
    const workout = new Workout({
      ...req.body,
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

router.post('/withExercises', async (req, res) => {
  let ret = {exercises: []}
  const workout = new Workout({
    title: req.body.title,
    description: req.body.description,
    days: req.body.days,
    creationDate: req.body.creationDate
  })
  const exercises = req.body.exercises;
  let promises = [];

  try {
    const createdWorkout = await workout.save()
    ret = {...ret, workout: createdWorkout};
    const id = createdWorkout._id;
    exercises.forEach(async exercise => {
      const newexercise = new Exercise({
        ...exercise,
        workout: id
      })
      promises.push(newexercise.save().then(data => {
        ret.exercises.push(data);
        ret.workout.exercises.push(data._id)
        Workout.findByIdAndUpdate(id,
          { '$push': { 'exercises': data._id } },
            { 'new': true });
      }))
    })
    await Promise.all(promises)
    return res.send(ret);
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

router.put('/:id', async (req, res) => {
  const id = req.params.id;
  const {exercises, ...data} = req.body;
  let promises = [];

  try {
    await Workout.findByIdAndUpdate(id, data);
    exercises.forEach(async exercise => {
      const newEx = new Exercise({
        ...exercise,
        workout: id
      })

      promises.push(newEx.save().then(data => {
        Workout.findByIdAndUpdate(id,
          { '$push': { 'exercises': data._id } },
            { 'new': true });
      }))
    } )
    await Promise.all(promises);
    return res.send({success: 'success'});
    
  } catch(err) {
    console.log(err)
    return res.send({err})
  }
})


module.exports = router;
