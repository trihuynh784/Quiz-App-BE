import { Express } from "express";
import userRoutes from "./user.route";
import topicRoutes from "./topic.route";
import questionRoutes from "./question.route";
import answerRoutes from "./answer.route";

const clientRoute = (app: Express) => {
  app.use("/users", userRoutes);

  app.use("/topics", topicRoutes);

  app.use("/questions", questionRoutes);

  app.use("/answers", answerRoutes);
};

export default clientRoute;