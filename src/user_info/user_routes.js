const { Router } = require("express");
const { hash_compare } = require("../middleware/compare");
const { hash_pass } = require("../middleware/hash");
const user_router = Router()
const { add_user, delete_user, update_user, list_user, token_check } = require("./user_controller")

user_router.post("/user", hash_pass, add_user);
user_router.delete("/user/:username", delete_user)
user_router.put("/user", hash_pass, update_user)
user_router.get("/user/:username", list_user)
user_router.get("/user", token_check)

module.exports = user_router