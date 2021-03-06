const { validationResult } = require('express-validator');
const HttpError = require('../models/http-error');
const User = require('../models/user');

const prepareComment = (c) => {
  const {
    comment,
    author,
    posted,
    upVoters,
    downVoters,
    subComments,
    _id
  } = c;
  
  const subs = subComments.map(s => {
    return {
      path: s.path,
      score: s.upVoters.length-s.downVoters.length,
      actualComment: s.actualComment,
      posted: s.posted
    }
  })

  return {
    _id,
    comment,
    authorId: author,
    posted,
    score: upVoters.length-downVoters.length,
    subComments: subs
  }
};




const prepareDrop = (drop) => {
  return {
    title: drop.title,
    creatorId: drop.creatorId,
    memeUrl: drop.url,
    source: drop.source,
    pinned: drop.pinners.length,
    comments: drop.comments,
  }
}

const checkValidation = (req, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(new HttpError('Invalid inputs passed, please check your data.', 422));
  }
}

exports.prepareDrop = prepareDrop;
exports.checkValidation = checkValidation;
exports.prepareComment = prepareComment;


