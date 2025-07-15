import mongoose from "mongoose";

const topicSchema = new mongoose.Schema({
  name: String,
});

const Topic = mongoose.model("Topic", topicSchema, "topics");

export default Topic;
