import express, { IRouter } from "express";
const router: IRouter = express.Router();

import { getTodos } from "../controllers/todo";

router.get("/", getTodos);

export default router;
