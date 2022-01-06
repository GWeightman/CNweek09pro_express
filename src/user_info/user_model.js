const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")

const user_schema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
})


user_schema.methods.generate_authtoken = function () {
    return jwt.sign({_id: this._id}, process.env.SECRET)
}

const User = mongoose.model("User Info", user_schema)

module.exports = User