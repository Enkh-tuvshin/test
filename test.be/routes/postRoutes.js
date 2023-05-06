const express = require("express");
const { createPost } = require("../controller/postController");

const router = express.Router();

router
  .get("/posts", () => {})
  .post("/posts", createPost)
  .put("/posts/:id", () => {})
  .delete("/posts/:id", () => {});

exports.postRoutes = router;