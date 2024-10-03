import express from "express";
const router = express.Router();

import { createCustomer, getCustomers, updateCustomer, deleteCustomer, getAllCustomers } from "../controllers/customer.controller.js";

router.post("/", createCustomer);
router.put("/:id", updateCustomer);
router.delete("/:id", deleteCustomer);
router.get('/all', getAllCustomers);
router.get("/:userId", getCustomers);

export default router;