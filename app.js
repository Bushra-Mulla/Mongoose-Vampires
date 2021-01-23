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
  console.log("added provided vampire data", vampires);
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
  console.log("added provided vampire data", vampires);
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
// Vampire.find({ victims: { $ne: 210234 } }, (err, victims) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("The vampire not havee 210234 victims are: ", victims);
//   mongoose.connection.close();
// });

// have greater than 150 AND fewer than 500 victims
// Vampire.find({ victims: { $gt: 150, $lt: 500 } }, (err, victims) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(
//     "The vampires have greater than 150 AND fewer than 500 victims are: ",
//     victims
//   );
//   mongoose.connection.close()
// });

// Select by exists or does not exist
// have a key of 'title'
// Vampire.find({ title: { $exists: true } }, (err, existsTitle) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(existsTitle);
//   mongoose.connection.close();
// });

// do not have a key of 'victims'
// Vampire.find({ victims: { $exists: false } }, (err, existsVictims) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("victims", existsVictims);
//   mongoose.connection.close();
// });

// have a title AND no victims
// Vampire.find(
//   { title: { $exists: true }, victims: { $exists: false } },
//   (err, exists) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("victims", exists);
//     mongoose.connection.close();
//   }
// );

// have victims AND the victims they have are greater than 1000
// Vampire.find(
//   { victims: { $exists: true ,$gt:1000} },
//   (err, exists) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log(" ", exists);
//     mongoose.connection.close();
//   }
// );

// Select with OR
// are from New York, New York, US or New Orleans, Louisiana, US
// Vampire.find(
//   {
//     $or: [
//       { location: "New York, New York, US" },
//       { location: "New Orleans, Louisiana, US" },
//     ],
//   },
//   (err, or) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("from New York, or New Orleans ", or);
//     mongoose.connection.close();
//   }
// );

// love brooding or being tragic
// Vampire.find(
//   { $or: [{ loves: "brooding" }, { love: "being tragic" }] },
//   (err, love) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("loves: ", love);
//     mongoose.connection.close();
//   }
// );

// have more than 1000 victims or love marshmallows
// Vampire.find(
//   { $or: [{ victims: { $gr: 1000 } }, { loves: "marshmallows" }] },
//   (err, or) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log(or);
//     mongoose.connection.close();
//   }
// );

// have red hair or green eyes
// Vampire.find(
//   { $or: [{ hair_color: "red" }, { eye_color: "green" }] },
//   (err, or) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log(or);
//     mongoose.connection.close();
//   }
// );

// Select objects that match one of several values
// love either frilly shirtsleeves or frilly collars
// Vampire.find(
//   { loves: { $in: ['frilly shirtsleeves', 'frilly collars'] } },
//   (err, loves) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log(loves);
//     mongoose.connection.close();
//   }
// );

// love brooding
// Vampire.find({ loves: { $in: ["brooding"] } }, (err, love) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(love);
//   mongoose.connection.close();
// });

// love at least one of the following: appearing innocent, trickery, lurking in rotting mansions, R&B music
// Vampire.find(
//   {
//     loves: {
//       $in: [
//         "appearing innocent",
//         "trickery",
//         "lurking in rotting mansions", "R&B music"
//       ],
//     },
//   },
//   (err, loves) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log(loves);
//     mongoose.connection.close();
//   }
// );

// love fancy cloaks but not if they also love either top hats or virgin blood _ Hint-You will also have to use $nin _
// Vampire.find(
//   {
//     loves: { $in: ["fancy cloaks"], $nin: ["top hats", "virgin blood"] },
//   },
//   (err, loves) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log(loves);
//     mongoose.connection.close();
//   }
// );

// Negative Selection
// love ribbons but do not have brown eyes
// Vampire.find(
//   { $and: [{ loves: { $in: ["ribbons"] } }, { eye_color: { $ne: "brown" } }] },
//   (err, loves) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log(loves);
//     mongoose.connection.close();
//   }
// );

// are not from Rome
// Vampire.find({ location: { $ne: "Rome" } }, (err, notFromRpme) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(notFromRpme);
//   mongoose.connection.close();
// });

// do not love any of the following: [fancy cloaks, frilly shirtsleeves, appearing innocent, being tragic, brooding]
// Vampire.find(
//   {
//     loves: {$ne: {$in: ["fancy cloaks","frilly shirtsleeves","appearing innocent","being tragic","brooding"]}}},
//   (err, loves) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log(loves);
//     mongoose.connection.close();
//   }
// );

// have not killed more than 200 people
// db.inventory.find({ price: { $not: { $gt: 1.99 } } });
// Vampire.find({ victims: { $not: { $gt: 200 } } }, (err, victims) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(victims);
//   mongoose.connection.close();
// });

// Replace //findOneAndReplace
// replace the vampire called 'Claudia' with a vampire called 'Eve'. 'Eve' will have a key called 'portrayed_by' with the value 'Tilda Swinton'
// Vampire.findOneAndReplace(
//   { name: "Claudia" },
//   { $set: { name: "Eve", portrayed_by: "Tilda Swinton" } },
//   (err, replace) => {
//     if (err) {
//       console.log("err", err);
//     }
//     console.log(replace);
//     mongoose.connection.close();
//   }
// );

// replace the first male vampire with another whose name is 'Guy Man', and who has a key 'is_actually' with the value 'were-lizard'
// Vampire.findOneAndReplace(
//   { gender: "m" },
//   { name: "Guy Man", is_actually: "were-lizard" },
//   (err, replace) => {
//     if (err) {
//       console.log("err", err);
//     }
//     console.log(replace);
//     mongoose.connection.close();
//   }
// );

// Update findOneAndUpdate
// Update 'Guy Man' to have a gender of 'f'
// Vampire.findOneAndUpdate(
//   { name: "Guy Man" },
//   { gender: "f" },
//   (err, update) => {
//     if (err) {
//       console.log("err", err);
//     }
//     console.log(update);
//     mongoose.connection.close();
//   }
// );

// Update 'Eve' to have a gender of 'm'
// Vampire.findOneAndUpdate({ name: "Eve" }, { gender: "m" }, (err, update) => {
//   if (err) {
//     console.log("err", err);
//   }
//   console.log(update);
//   mongoose.connection.close();
// });
// Update 'Guy Man' to have an array called 'hates' that includes 'clothes' and 'jobs'
// Vampire.findOneAndUpdate(
//   { name: "Guy Man" },
//   { hates: ["clothes", "jobs"] },
//   (err, update) => {
//     if (err) {
//       console.log("err", err);
//     }
//     console.log(update);
//     mongoose.connection.close();
//   }
// );

// Update 'Guy Man's' hates array also to include 'alarm clocks' and 'jackalopes'
// Vampire.findOneAndUpdate(
//   { name: "Guy Man" },
//   { $push: { hates: { $each: ["alarm clocks", "jackalopes"] }} },
//   (err, update) => {
//     if (err) {
//       console.log("err", err);
//     }
//     console.log(update);
//     mongoose.connection.close();
//   }
// );

// Rename 'Eve's' name field to 'moniker'
// Vampire.findOneAndUpdate(
//   { name: "Eve" },
//   { name: "moniker" },
//   (err, update) => {
//     if (err) {
//       console.log("err", err);
//     }
//     console.log(update);
//     mongoose.connection.close();
//   }
// );
// We now no longer want to categorize female gender as "f", but rather as fems. Update all females so that the they are of gender "fems".
// Vampire.updateMany({ gender: "f" }, { gender: "fems" }, (err, update) => {
//   if (err) {
//     console.log("err", err);
//   }
//   console.log(update);
//   mongoose.connection.close();
// });

// Remove
// Remove a single document wherein the hair_color is 'brown'
Vampire.findOneAndRemove({ hair_color: "brown" }, (err, vampire) => {
  if (err) {
    console.log(err);
  } else {
    console.log(vampire);
  }
});
// We found out that the vampires with the blue eyes were just fakes! Let's remove all the vampires who have blue eyes from our database.
Vampire.remove({ eye_color: "blue" }, (err, vampire) => {
  if (err) {
    console.log(err);
  } else {
    console.log(vampire);
  }
});
