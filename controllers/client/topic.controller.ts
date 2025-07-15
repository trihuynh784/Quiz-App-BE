import { Request, Response } from "express";
import Topic from "../../models/topic.model";

// [GET] /topics
export const index = async (req: Request, res: Response) => {
  if (req.query.id) {
    const topic = await Topic.findById(req.query.id).lean();

    const newTopic = {
      ...topic,
      id: topic._id.toString(),
    };
  
    res.json([newTopic]);
    return;
  }

  const topics = await Topic.find().lean();

  const newTopics = topics.map((topic) => ({
    ...topic,
    id: topic._id.toString(),
  }));

  res.json(newTopics);
};
