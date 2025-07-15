import { Request, Response } from "express";
import Answer from "../../models/answer.model";

// [GET] /answers
export const index = async (req: Request, res: Response) => {
  if (req.query.id) {
    const id = req.query.id;

    const answer = await Answer.findById(id).lean();

    let newAnswer = {
      ...answer,
      id: answer._id.toString(),
    };

    res.json([newAnswer]);
    return;
  }
  const userId = req.query.userId;

  const answers = await Answer.find({ userId: userId }).lean();

  const newAnswers = answers.map((answer) => ({
    ...answer,
    id: answer._id.toString(),
  }));

  res.json(newAnswers);
};

// [POST] /answers
export const create = async (req: Request, res: Response) => {
  const dataAnswer = {
    topicId: req.body.topicId,
    userId: req.body.userId,
    answers: req.body.answers,
  };

  const answer = new Answer(dataAnswer);
  await answer.save();

  const newAnswer = {
    ...answer,
    id: answer._id.toString(),
  };

  res.json(newAnswer);
};
