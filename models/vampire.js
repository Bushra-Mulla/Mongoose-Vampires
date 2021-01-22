const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const vampireSchema = new Schema({
  // add your code here to set up your schema
  name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
  },
  hair_color: {
    type: String,
    default: "blonde",
  },
  eye_color: {
    type: String,
  },
  dob: {
    type: Date,
  },
  loves: [
    {
      type: String,
    },
  ],
  location: {
    type: String,
  },
  gender: {
    type: String,
  },
  victims: {
    type: Number,
    min: 0,
  },
});

const Vampire = mongoose.model("Vampire", vampireSchema);

//make this exportable to be accessed in `app.js`
module.exports = Vampire;
