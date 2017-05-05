const mongoose = require('../Settings/MongooseConfig');

let teamSchema = new mongoose.Schema({
  teamId:  {
      type: String,
      unique : true,
      required: [true, "Field team is required"]
  },
  timebox: {
      type: String,
      required: [true, "Field timebox is required"],
      unique: [true, "Nickname already exists"]
  },
  date_start: {
      type: String,
      required: [true, "Field date start is required"],
      unique: [true, "Email already exists"]
  },
  date_end: { 
      type: Date, 
      required: [true, "Field date end is required"] 
  },
  score: {
      type: Number,
      required: [true, "Field score is required"] 
  },
  storiesNumbers: {
      type: Array,
      required: [true, "Field stories is required"]
  }
});


mongoose.model('Team', teamSchema);
