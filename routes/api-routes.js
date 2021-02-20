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
router.post("/api/workouts", (req, res) => {
  db.Workout.create({})
    .then((dbWorkout) => res.json(dbWorkout))
    .catch((err) => {
      console.log("err", err);
      res.json(err);
    });
});

router.put("/api/workouts/:id", ({ body, params }, res) => {
  db.Workout.findByIdAndUpdate(
    params.id,
    { $push: { exercises: body } },
    { new: true }
  )
    .then((data) => res.json(data))
    .catch((err) => {
      res.json(err);
    });
});


router.get("/api/workouts/range", (req, res) => {
  db.Workout.find({})
  .then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch (err => {
    res.json(err);
  });
});

module.exports = router;
