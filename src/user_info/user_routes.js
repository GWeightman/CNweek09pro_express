const { Router } = require("express");
const { hash_pass } = require("../middleware/hash");
const user_router = Router()
const { add_user, delete_user } = require("./user_controller")

user_router.post("/user", hash_pass, add_user);
user_router.delete("/user/:username", delete_user)
// user_router.put("/user", edit_user)
// user_router.get("/user", list_user)

module.exports = user_router