/*module.exports = (server) => {
    const postController = require(`../controllers/postController`);

    server.route(`/posts`)
    .get(postController.listAllPosts)
    .post(postController.createAPost)
    .put(postController.modifiedAPost)
    .delete(postController.deleteAPost);
}*/

const express = require('express');
const router = express.Router();

const postController = require('../controllers/postController');

// /posts
router
    .route('/')
    .get(postController.listAllPosts)
    .post(postController.createAPost);

    // /posts/:id_post
router
    .route('/:id_post')
    .delete(postController.deleteAPost)
    .put(postController.modifiedAPost)
    .get(postController.getAPost);

module.exports = router;