const { postModel}  = require("../model/postModel")

exports.createPost = async (req, res) => {
    const body = req.body

    const result = await Post(body).save();
    res.send(result)
}