# Workout-Manager

Workout manager allows you to create and manage workouts.

You can add, remove and edit workouts with their exercises.

You can then register your performance in those workouts and view your progress using charts in the Data tab.

## Docker containers

Three docker containers are used to run this project:

    - Backend using MongoDB
    - Frontend using React with Redux
    - Nginx

## How to run

To run you need to have Docker and Docker Compose installed

In the main directory run this command

```
$ docker-compose up -d
```
Now you can access the app by visiting localhost in your browser

## API

Api from this project is available at localhost/api
