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
const user_model_1 = __importDefault(require("../../models/user.model"));
const index = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const key = Object.keys(req.query)[0];
    const value = req.query[key];
    const user = yield user_model_1.default.findOne({
        [key]: value,
    }).lean();
    let newUser = {};
    if (user) {
        newUser = Object.assign(Object.assign({}, user), { id: user._id.toString() });
    }
    res.json(user ? [newUser] : []);
});
exports.index = index;
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const dataUser = {
        fullName: req.body.fullName,
        password: req.body.password,
        email: req.body.email,
        token: req.body.token,
    };
    const user = new user_model_1.default(dataUser);
    yield user.save();
    res.json({
        code: 400,
        message: "Create new account success!",
    });
});
exports.create = create;
