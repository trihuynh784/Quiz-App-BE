import express, { Router } from "express";
const router: Router = express.Router();

import * as controller from "../../controllers/client/answer.controller";

router.get("/", controller.index);

router.post("/", controller.create);

export default router;