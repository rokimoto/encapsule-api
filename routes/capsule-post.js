var express = require('express');
var capsulePostController = require('../controllers/capsule-post-controller');

var router = express.Router();

router.route('/')
  .get(capsulePostController.index)
  .post(capsulePostController.create);

router.route('/:id')
  .get(capsulePostController.show)
  .put(capsulePostController.update)
  .delete(capsulePostController.destroy);

module.exports = router;