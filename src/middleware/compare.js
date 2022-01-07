const bcrypt = require("bcryptjs");
const User = require("../user_info/user_model")

exports.hash_compare = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.params.username })
    if (await bcrypt.compare(req.body.password, user.password)) {
        next();
    }
    else {
        res.send({message: "Not Authorised"})
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Check server logs" });
  }
};