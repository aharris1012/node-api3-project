const express = require('express');
const users = require("./userDb");
const postRouter = require("../posts/postRouter");

const router = express.Router();

router.use("/:id/posts", postRouter);
router.post("/", validateUser(), (req, res) => {
  users
    .insert(req.body)
    .then(data => res.json(data))
    .catch(err =>
      res
        .status(404)
        .json({ errorMessage: "cannot post user at this time", err })
    );
});

router.post("/:id/posts", validateUserId(), validatePost(), (req, res) => {
  posts
    .insert(req.text)
    .then(data => res.json(data))
    .catch(err => res.status(500).json({ error: "Post cannot be created" }));
});

router.get("/", (req, res) => {
  users
    .get()
    .then(data => res.json(data))
    .catch(err => res.status(404).json({ message: "could not find users" }));
});

router.get('/:id', (req, res) => {
  // do your magic!
});

router.get('/:id/posts', (req, res) => {
  // do your magic!
});

router.delete('/:id', (req, res) => {
  // do your magic!
});

router.put('/:id', (req, res) => {
  // do your magic!
});

//custom middleware

function validateUserId(req, res, next) {
  // do your magic!
}

function validateUser(req, res, next) {
  // do your magic!
}

function validatePost(req, res, next) {
  // do your magic!
}

module.exports = router;
