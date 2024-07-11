import { asynchandler } from "../utils/asynchandler.js";
import { User } from "../models/user.js";
import { sendToken } from "../utils/jwtToken.js";

export const registerUser = asynchandler(async (req, res, next) => {
  const { name, email, password } = req.body;

  const user = await User.create({
    name,
    email,
    password,
    avatar: {
      publicId: "this is a sample id",
      url: "profile img",
    },
  });

  sendToken(user, 201, res);
});

// login User

export const loginUser = asynchandler(async (req, res, next) => {
  const { email, password } = req.body;

  // checking for if user has given email as well as password

  if (!email || !password) {
    return next(new errorHandling("please enter the email and password", 401));
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return next(new errorHandling("Invalid email and password"), 401);
  }

  const isPasswordMatched = user.comparePassword(password);
  if (!isPasswordMatched) {
    return next(new errorHandling("Invalid email and password"), 401);
  }

  sendToken(user, 201, res);

});
