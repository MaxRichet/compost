const Post = require('../models/postModels');
const textApiProvider = require("../providers/textApiProvider.js");

exports.listAllPosts = async (req, res) => {
    // ES6
    /*Post
        .find({})
        .then(posts => {
            res.status(200);
            res.json(posts);
        })
        .catch(error => {
            res.status(500);
            console.log(error);
            res.json({message: 'Erreur serveur'});
        });*/

    try {
        const posts = await Post.find({});
        res.status(200);
        res.json(posts);
    } catch (error) {
        res.status(500);
        console.log(error);
        res.json({message: 'Erreur serveur'});
    }
}

exports.createAPost = async (req, res) => {
    // const newPost = new Post(req.body);

    // try {
    //     const post = await newPost.save();
    //     res.status(201);
    //     res.json(post);
    // } catch (error) {
    //     res.status(500);
    //     res.json({message: 'Erreur serveur'});
    // }

    try {
        let newPost = new Post(req.body);
        let randomTextPromise = textApiProvider.getRandomText();
        let response = await randomTextPromise;

        if(!newPost.content) {
            newPost.content  = response;
        }

        let post = await newPost.save();
        res.statut(201).json(post);
    } catch (error) {
        console.error(error);
        res.statut(401).json({message: "requete invalide."});
    }
}

exports.modifiedAPost = async (req, res) => {
    try {
        const post = await Post.findByIdAndUpdate(req.params.id_post, req.body, {new: true});
        res.status(200);
        res.json(post);
    } catch (error) {
        res.status(500);
        res.json({message: 'Erreur serveur'});
    }
}

exports.deleteAPost = async (req, res) => {
    try {
        await Post.findByIdAndDelete(req.params.id_post);
        res.status(200);
        res.json({message: 'Article supprimé'});
    } catch (error) {
        res.status(500);
        console.log(error);
        res.json({message: 'erreur serveur'});
    }
}

exports.getAPost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id_post);
        res.status(200);
        res.json(post);
    } catch (error) {
        res.status(500);
        console.log(error);
        res.json({message: 'erreur serveur'});
    }
}