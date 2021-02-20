// Require our models folder and express router
const db = require("../models");
const router = require("express").Router();

// Find all workouts
// Aggregate used to tally up the sum of exercise duration to populate totalDuration field
router.get("/api/workouts", (req, res) => {
  db.Workout.aggregate([
    {
      $addFields: {
        totalDuration: {$sum: "$exercises.duration"}
      }
    }
  ])
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

// Add exercise to workout
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

//Route for workout dashboard
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
