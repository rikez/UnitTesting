const mongoose = require('../Settings/MongooseConfig');

let sprintSchema = new mongoose.Schema({
  team_id:  {
      type: String,
      unique : true,
      required: [true, "Field team is required"]
  },
  timebox: {
      type: String,
      required: [true, "Field timebox is required"],
  },
  date_start: {
      type: String,
      required: [true, "Field date start is required"],
  },
  date_end: { 
      type: Date, 
      required: [true, "Field date end is required"] 
  },
  score: {
      type: Number,
      required: [true, "Field score is required"] 
  },
  stories_number: {
      type: Array,
      required: [true, "Field stories is required"]
  }
});


mongoose.model('Sprint', sprintSchema);
