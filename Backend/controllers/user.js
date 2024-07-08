import { asynchandler } from "../utils/asynchandler.js";
import { User } from "../models/user.js";

export const registerUser = asynchandler(async (req, res, next) => {
    const { name, email, password } = req.body;

    const user = await User.create({
      name,
      email,
      password,
      avatar: {
        public_Id: "this is a sample id",
        url: "profile img",
      },
    });

    res.status(201).json({
      success: true,
      user,
    });
});
