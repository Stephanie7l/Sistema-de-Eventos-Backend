const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const EventsSchema = new Schema({
  title : { type: String, unique: true },
  picture : String,
  description : String,
  category : String
});

const EventsModel = mongoose.model("events", EventsSchema);

module.exports = EventsModel;