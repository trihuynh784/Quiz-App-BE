"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = exports.index = void 0;
const answer_model_1 = __importDefault(require("../../models/answer.model"));
const index = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.query.id) {
        const id = req.query.id;
        const answer = yield answer_model_1.default.findById(id).lean();
        let newAnswer = Object.assign(Object.assign({}, answer), { id: answer._id.toString() });
        res.json([newAnswer]);
        return;
    }
    const userId = req.query.userId;
    const answers = yield answer_model_1.default.find({ userId: userId }).lean();
    const newAnswers = answers.map((answer) => (Object.assign(Object.assign({}, answer), { id: answer._id.toString() })));
    res.json(newAnswers);
});
exports.index = index;
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const dataAnswer = {
        topicId: req.body.topicId,
        userId: req.body.userId,
        answers: req.body.answers,
    };
    const answer = new answer_model_1.default(dataAnswer);
    yield answer.save();
    const newAnswer = Object.assign(Object.assign({}, answer), { id: answer._id.toString() });
    res.json(newAnswer);
});
exports.create = create;
