# **Workout Tracker**

For this project, our application serves as a workout tracker where a user can add exercises to recent workout plans, create a new workout plan, and view the combined duration/weigths used from the past seven days. I was tasked to created a mongo database with a mongoose schema and handle all routes with Express.

<br><br>

![image](https://user-images.githubusercontent.com/52800632/108585822-7203a300-72ff-11eb-8a97-1af88101d535.png)
![image](https://user-images.githubusercontent.com/52800632/108585833-8182ec00-72ff-11eb-9f7a-c4bbe6a3cda4.png)




# **Installation**


Install required dependencies
```terminal
npm install mongoose
npm install express
npm install heroku
```

# **Built With**

<ul>
    <li> MongoDb - general purpose database built for modern application developers.
    <li> Mongoose - MongoDB object modeling tool
    <li> Javascript - scripting language that allows implementation of complex web features
    <li> jQuery - Javascript library that simplifies javascript programming.
    <li> HTML - The standard markup language for web pages 
    <li> CSS - used to describe the presentation of markup langauges such as HTML </li>
</ul>

# **Code Snippet**
Here I utulized the mongo built in aggregation method to take all of the duration data in the exercise array to add all of the numbers together and put out the data to a new field called totalDuration.
```js
 // Aggregate used to tally up the sum of exercise duration to populate totalDuration field
router.get("/api/workouts", (req, res) => {
  db.Workout.aggregate([
    {
      $addFields: {
        totalDuration: { $sum: "$exercises.duration" },
      },
    },
  ])
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

```
```js
// Add exercise to workout
router.put("/api/workouts/:id", ({ body, params }, res) => {
  db.Workout.findByIdAndUpdate(
    params.id,
    // $push appends to the exercises array
    { $push: { exercises: body } },
    { new: true }
  )
    .then((data) => res.json(data))
    .catch((err) => {
      res.json(err);
    });
});

```
# **Deployed Link**

https://workouttracker-rc.herokuapp.com/
# **Authors**

Ron-Arjay Caluag<br>
[Linkedin](https://www.linkedin.com/in/ron-arjay-caluag-00b29b182/)<br>
[Github](https://github.com/ArjayCaluag)


The MIT License (MIT)

Copyright (c) 2011-2020 Twitter, Inc.

Copyright (c) 2011-2020 The Bootstrap Authors

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
