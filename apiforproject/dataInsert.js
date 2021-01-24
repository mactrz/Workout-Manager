// RUN THIS ONLY THE FIRST TIME

const express = require('express');
const app = express();
const exercise = require('./routes/exercise');
const workout = require('./routes/workout');
const Workout = require('./models/Workout')
const Exercise = require('./models/Exercise')
const Axios = require('axios').default;

app.use(express.json());


app.use('/workouts', workout);
workout.use('/:idWorkout/exercises', exercise);

require('dotenv').config();


require('dotenv').config();
const dbConnData = {
    host: process.env.MONGO_HOST || '127.0.0.1',
    port: process.env.MONGO_PORT || 27017,
    database: process.env.MONGO_DATABASE || 'api'
};

const exercisefunc = (title, description, bodypart, difficulty) => {
  return {
  title,
  description,
  bodypart,
  difficulty
}
}

const mongoose = require('mongoose');
const { db } = require('./models/Workout');

const exercise1 =  exercisefunc('Squats', 'Sqat down whit your legs slightly apart keeping your posture straight', 'legs', 2)
const exercise2 = exercisefunc('Box jumps', 'Jump up on a box with both of your feet at the same time', 'legs', 1)
const exercise3 = exercisefunc('Push Ups', 'Lay down on your stomach and support yourself with your arms, use force to lift your upper body up', 'chest', 5)
const exercise4 = exercisefunc('Pull ups', 'Grab a bar with your hands and use your biceps to lift yourself of the ground', 'arms', 2)
const exercise5 = exercisefunc('Dumbell curl', 'Grab both dumbells with your hands and use your biceps to pull them up', 'arms', 3)
const exercise6 = exercisefunc('Running', 'Pick a nice place outside and run for at least a mile, while enjoying the views', 'legs', 1)
const exercise7 = exercisefunc('Deadlift', 'Raise the bar with weight to your hips using your back muscles', 'torso', 8)


const workoutsData = [
  {
    title: 'Leg day',
    description: 'Workout for developing various leg muscles',
    days: [],
    exercises: [exercise1, exercise2]
  },

  {
    title: 'Power workout',
    description: 'Workout for increasing muscle mass and to strengthen your upper body',
    days: [],
    exercises: [exercise3, exercise5, exercise4]
  },

  {
    title: 'Cardio',
    description: 'Workout for developing endurance',
    days: [],
    exercises: [exercise6]
  },

  {
    title: 'Full body workout',
    description: 'Workout that develops all major muscles in your body',
    days: [],
    exercises: [exercise1, exercise3, exercise4]
  },

  {
    title: 'Back and buttocks',
    description: 'Strengthening your back and buttocks',
    days: [],
    exercises: [exercise1, exercise7]
  },
  
]

mongoose
  .connect(`mongodb://${dbConnData.host}:${dbConnData.port}/${dbConnData.database}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(response => {
    console.log(`Connected to MongoDB. Database name: "${response.connections[0].name}"`)
    const port = process.env.PORT || 5000
    app.listen(port, () => {
      console.log(`API server listening at http://localhost:${port}`);
      const now = new Date()
      workoutsData.forEach(async workout => {
        Axios.post('http://localhost:5000/workouts', {title: workout.title, description: workout.description, creationDate: now}).then(response => {
          var id = response.data._id
          console.log(id)
          workout.exercises.forEach(async exercise => {
            try{
            await Axios.post(`http://localhost:5000/workouts/${id}/exercises`, {title: exercise.title, description: exercise.description, difficulty: exercise.difficulty,
            bodypart: exercise.bodypart})
            }
            catch(err) {
              console.log(err)
            }
          })
        })
      })
    });
    

  })
  .catch(error => console.error('Error connecting to MongoDB', error));