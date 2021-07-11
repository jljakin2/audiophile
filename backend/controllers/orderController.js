import asyncHandler from "express-async-handler";
import Order from "../models/orderModel.js";

// @desc Create a new order
// @route POST /api/orders
// @access Public
const createNewOrder = asyncHandler(async (req, res) => {
  const { orderItems, name, email, paymentType, grandTotal } = req.body;

  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error("No order items");
  } else {
    const order = new Order({
      orderItems,
      name,
      email,
      paymentType,
      grandTotal,
    });

    const createdOrder = await order.save();

    res.status(201).json(createdOrder);
  }
});

export { createNewOrder };
