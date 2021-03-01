const Exercise = require('../models/Exercise');
const express = require('express');
const router = express.Router({mergeParams: true});

router.get('/all', async (req, res) => {
    try {
      const found = await Exercise.find()
      return res.send(found);
    }
    catch(err) {
      console.log(err);
      return res.send({err});
    }
  });

module.exports = router;