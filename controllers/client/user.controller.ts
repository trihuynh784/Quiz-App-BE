import { Request, Response } from "express";
import User from "../../models/user.model";

// [GET] /users?key=value
export const index = async (req: Request, res: Response) => {
  const key = Object.keys(req.query)[0];
  const value = req.query[key];

  const user = await User.findOne({
    [key]: value,
  }).lean();

  let newUser = {};
  if (user) {
    newUser = {
      ...user,
      id: user._id.toString(),
    };
  }

  res.json(user ? [newUser] : []);
};

// [POST] /users
export const create = async (req: Request, res: Response) => {
  const dataUser = {
    fullName: req.body.fullName,
    password: req.body.password,
    email: req.body.email,
    token: req.body.token,
  };

  const user = new User(dataUser);
  await user.save();

  res.json({
    code: 400,
    message: "Create new account success!",
  });
};
