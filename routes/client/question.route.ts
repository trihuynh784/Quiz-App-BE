import express, { Router } from "express";
const router: Router = express.Router();

import * as controller from "../../controllers/client/question.controller";

router.get("/", controller.index);

export default router;