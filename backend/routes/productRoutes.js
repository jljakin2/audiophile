import express from "express";

const router = express.Router();

import {
  getProductsByCategory,
  getProductBySlug,
} from "../controllers/productController.js";

router.route("/:category").get(getProductsByCategory);
router.route("/product/:slug").get(getProductBySlug);

export default router;
