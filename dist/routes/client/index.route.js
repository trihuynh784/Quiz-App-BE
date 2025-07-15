"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_route_1 = __importDefault(require("./user.route"));
const topic_route_1 = __importDefault(require("./topic.route"));
const question_route_1 = __importDefault(require("./question.route"));
const answer_route_1 = __importDefault(require("./answer.route"));
const clientRoute = (app) => {
    app.use("/users", user_route_1.default);
    app.use("/topics", topic_route_1.default);
    app.use("/questions", question_route_1.default);
    app.use("/answers", answer_route_1.default);
};
exports.default = clientRoute;
