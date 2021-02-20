// Require our models folder and express router
const db = require("../models");
const router = require("express").Router();

// Find all workouts
router.get("/api/workouts", (req, res) => {
  db.Workout.find({})
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

// Create workout
router.post("/api/workouts", ({ body }, res) => {

  db.Workout.create(body).then((dbWorkout => {
      res.json(dbWorkout);
  })).catch(err => {
      res.json(err);
  });
});


module.exports = router;
