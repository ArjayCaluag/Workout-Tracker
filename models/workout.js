// Require mongoose
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Schema based off of seeds file given to us
const workoutSchema = new Schema({
  day: {
    type: Date,
    default: () => new Date(),
  },

  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Must enter exercise type",
      },
      name: {
        type: String,
        trim: true,
        required: "Must enter exercise name",
      },
      duration: {
        type: Number,
        required: "Must Enter minute duration",
      },
      weight: {
        type: Number,
        required: "Enter amount of weights used",
      },
      sets: {
        type: Number,
        required: "Enter amount of sets",
      },
      distance: {
        type: Number,
        required: "Enter amount of miles ran",
      },
      reps: {
        type: Number,
        required: "Enter amount of reps",
      },
    },
  ],
  totalDuration: {
    type: Number,
    default: 0,
  },
});

const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;
