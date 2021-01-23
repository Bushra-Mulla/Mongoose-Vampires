/**********************************************************************
Set up and Configuration
**********************************************************************/
// Dependencies
const mongoose = require("mongoose");
const seedData = require("./models/seed_vampires.js");
const Vampire = require("./models/vampire.js");

// Configuration
const mongoURI = "mongodb://localhost:27017/" + "vampires";
const db = mongoose.connection;

// Connect to Mongo
mongoose.connect(mongoURI);

// Connection Error/Success
db.on("error", (err) => console.log(err.message + " is Mongod not running?"));
db.on("connected", () => console.log("mongo connected: ", mongoURI));
db.on("disconnected", () => console.log("mongo disconnected"));

db.on("open", () => {
  console.log("Connection made!");
});

/**********************************************************************
Write Your Code Below
**********************************************************************/
Vampire.insertMany(seedData, (err, vampires) => {
  if (err) {
    console.log(err);
  }
  // console.log("added provided vampire data", vampires);
  mongoose.connection.close();
});
const newVampire = [
  {
    name: "Elena",
    eye_color: "brown",
    dob: new Date(1972, 4, 13, 7, 47),
    loves: ["cereal", "marshmallows"],
    location: "Minneapolis, Minnesota, US",
    gender: "f",
    victims: 0,
  },
  {
    name: "Chocula",
    title: "Count",
    hair_color: "brown",
    eye_color: "brown",
    dob: new Date(1971, 2, 13, 7, 47),
    loves: ["cereal", "marshmallows"],
    location: "Minneapolis, Minnesota, US",
    gender: "m",
    victims: 2,
  },
  {
    name: "Edward Cullen",
    title: "Count",
    hair_color: "brown",
    eye_color: "brown",
    dob: new Date(1971, 2, 13, 7, 47),
    loves: ["cereal", "marshmallows"],
    gender: "m",
    victims: 10,
  },
  {
    name: "Marceline",
    title: "Count",
    hair_color: "brown",
    eye_color: "blue",
    dob: new Date(1971, 1, 13, 7, 47),
    loves: ["cereal", "marshmallows"],
    location: "Minneapolis, Minnesota, US",
    gender: "f",
    victims: 290,
  },
];
Vampire.insertMany(newVampire, (err, vampires) => {
  if (err) {
    console.log(err);
  }
  // console.log("added provided vampire data", vampires);
  mongoose.connection.close();
});

//Find all the vampires that that are females
// Vampire.find({ gender: 'f' }, (err,allFemales) => {
//   if (err) {
//     console.log(err)
//   }
//   console.log('the vampire females are: ', allFemales)
//   mongoose.connection.close();
// })

// have greater than 500 victims
// Vampire.find({ victims: { $gt: 500 } }, (err, victims) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("The vampires have greater than 500 victims", victims);
//   mongoose.connection.close();
// });

// have fewer than or equal to 150 victims
// Vampire.find({ victims: { $lte: 150 } }, (err, victims) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(
//     "The vampire havee less than or equal 150 victims are: ",
//     victims
//   );
//   mongoose.connection.close();
// });

// have a victim count is not equal to 210234
// Vampire.find({ victims: 210234 }, (err, victims) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("The vampire havee 210234 victims are: ", victims);
//   mongoose.connection.close();
// });

// have greater than 150 AND fewer than 500 victims
Vampire.find({ victims: { $gt: 150, $lt: 500 } }, (err, victims) => {
  if (err) {
    console.log(err);
  }
  console.log(
    "The vampires have greater than 150 AND fewer than 500 victims are: ",
    victims
  );
});
