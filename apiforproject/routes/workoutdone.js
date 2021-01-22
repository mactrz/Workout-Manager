const WorkoutsDone = require('../models/WorkoutsDone');
const express = require('express');
const router = express.Router({mergeParams: true});

router.get('/', async (req, res) => {
    try {
      const found = await WorkoutsDone.find()
      return res.send(found);
    }
    catch(err) {
      console.log(err);
      return res.send({err});
    }
  });

  router.post('/', async (req, res) => {
    try {
    console.log(req.body)   
    const newWorkdone = new WorkoutsDone(req.body)
    const saved = await newWorkdone.save();
      return res.send(saved);
    }
    catch(err) {
      console.log(err);
      return res.send({err});
    }
  });

module.exports = router;