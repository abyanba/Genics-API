const User = require('../models/User');

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      message:"Get users success",
      data:users
    })
  } catch (error) {
    res.status(500).json({  
      message:"Get users failed",
      data:error
    })
  }
};

const saveUser = async (req, res) => {
  try {
    const user = new User(req.body);
    const saveUser = await user.save();

    req.status(201).json({
      message: "Save user success",
      data: saveUser
    })
  } catch (error) {
    res.json(error)
  }
};

module.exports = {
  getUsers,
  saveUser
}