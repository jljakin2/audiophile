import express from "express";

const router = express.Router();

import { createNewOrder } from "../controllers/orderController.js";

router.route("/").post(createNewOrder);

export default router;
