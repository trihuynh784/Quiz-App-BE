import mongoose from "mongoose";

const answerSchema = new mongoose.Schema({
  topicId: String,
  userId: String,
  answers: Array,
});

const Answer = mongoose.model("Answer", answerSchema, "answers");

export default Answer;
