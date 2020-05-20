const express = require("express");
const { check } = require("express-validator");

const commentController = require("../controllers/comment-controller");

const router = express.Router();

router.post("/drop/:dropId/comment", commentController.createComment);

router.get("/:dropId/comment", commentController.getCommentsForDrop);

router.patch("/comment/:commentId", commentController.updateComment);

router.get("/comment/:commentId", commentController.getComment);

// router.delete("/:commentId", commentController.deleteComment);

router.post("/comment/:commentId/vote", commentController.voteComment);

// router.post("/:commentId/sub", commentController.createSubComment);

// router.post("/:commentId/delSub", commentController.deleteSubComment);

// router.post("/:commentId/voteSub", commentController.voteSubComment);

module.exports = router;