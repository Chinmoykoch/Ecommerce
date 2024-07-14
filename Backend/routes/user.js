import express from "express";
import { logOutUser, loginUser, registerUser } from "../controllers/user.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/logout", logOutUser);

export default router;
