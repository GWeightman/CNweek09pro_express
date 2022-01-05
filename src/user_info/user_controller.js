const User = require("./user_model")

exports.add_user = async (req, res) => {
    try {
        const user_entry = await User.create(req.body)
        res.status(201).send({ message: "Successfully added", user_entry })
    } catch (error) {
        console.log(error)
        res.status(500).send({ message: "check server logs" })
    }
};

exports.delete_user = async (req, res) => {
    try {
        const user_entry = await User.deleteOne({username: req.params.username})
        res.status(200).send({ message: "Successfully deleted", user_entry })
    } catch (error) {
        console.log(error)
        res.status(500).send({ message: "check server logs" })
    }
}
