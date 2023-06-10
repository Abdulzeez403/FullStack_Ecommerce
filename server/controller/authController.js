const asyncHandler = require("express-async-handler");
const userSchema = require("../models/userSchema");
const generateToken = require("../ultis/generateToken.js");

const RegisterUser = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, mobile, password } = req.body;

  //Check whether the user already exist!
  const UserExist = await userSchema.findOne({ email });
  if (UserExist) {
    res.send(400);
    throw Error("The user is already exist!");
  }

  //Create the user
  const User = await userSchema.create({
    firstName,
    lastName,
    email,
    mobile,
    password,
  });
  if (User) {
    generateToken(res, User.id);
    res.status(200).json({
      _id: User.id,
      firstName: User.firstName,
      email: User.email,
      password: User.password
    });
    console.log(User)
  } else {
    res.status(400);
    throw Error("Something went wrong!")
  }

});

const LogInUser = asyncHandler(async (req, res, next) => {
  try {
    const { email, password } = req.body;

    //Check if the input is empty
    if (!email || !password) {
      res.status(400);
      throw Error("All Field must be filled!");
    }

    const User = await userSchema.findOne({ email });
    if (!User) {
      res.status(404).send("User is not Found!");
    }
    if (User && (await User.matchPassword(password))) {
      generateToken(res, User.id);
      res.status(200).json({
        _id: User.id,
        email: User.email,
        password: User.password,
        token: User.token
      });
    } else {
      res.status(400);
      throw Error("Invalid email or password")
    }
  } catch (err) {
    next(err);
  }
});


const LogOut = asyncHandler(async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  })
  res.status(200).json({ message: "Logged Out Successfully" })
});

const CurrentUser = async (req, res) => {
  // const user = await UserSchema.findById(req.user._id);
  // if (user) {
  //   res.json({
  //     _id: req.user.username,
  //     emai: req.user.email,
  //   });
  // }
  res.send({ msg: "The User" })

};



module.exports = {
  RegisterUser,
  LogInUser,
  LogOut,
  CurrentUser,
};
