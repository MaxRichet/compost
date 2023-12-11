const express = require('express');
const router = express.Router();

const comController = require('../controllers/comController');

// /posts
router
    .route('/posts/:id_post/comments')
    .get(comController.listAllComments)
    .post(comController.createAComment);

// /posts/:id_post
router
    .route('/comments/:id_com')
    .delete(comController.deleteAComment)
    .put(comController.updateAComment)
    .get(comController.getAComment);

module.exports = router;