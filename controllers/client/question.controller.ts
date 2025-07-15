import { Request, Response } from "express";
import Question from "../../models/question.model";

// [GET] /topics
export const index = async (req: Request, res: Response) => {
  const key = Object.keys(req.query)[0];
  const value = req.query[key];

  const questions = await Question.find({ [key]: value }).lean();

  const newQuestions = questions.map((question) => ({
    ...question,
    id: question._id.toString(),
  }));

  res.json(newQuestions);
};
