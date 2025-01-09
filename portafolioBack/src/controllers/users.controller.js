const User = require("../models/users.model");

const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    next(error);
  }
};

const createUser = async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    console.log(user);
    res.json(user);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createUser,
  getAllUsers,
};
