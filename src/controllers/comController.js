const Com = require('../models/comModels');
const Post = require('../models/postModels')

exports.listAllComments = async (req, res) => {

    try {
        const coms = await Com.find({post_id: req.params.id_post});
        res.status(200).json(coms);
    } catch (error) {
        res.status(500).json({message: 'Erreur serveur'});
    }
}

exports.createAComment = async (req, res) => {
    try {
        await Post.findById(req.params.id_post);
        const newComment = new Com({...req.body, post_id: req.params.id_post});
        try {
            const coms = await newComment.save();
            res.status(201).json(coms);
        } catch (error) {
            res.status(500).json({message: 'Erreur serveur (db)'});
        }
    } catch (error) {
        res.status(500).json({message: 'Erreur serveur (post inexistant).'});
    }
    
}

exports.updateAComment = async (req, res) => {
    try {
        const coms = await Com.findByIdAndUpdate(req.params.id_com, req.body, {new: true});
        res.status(200).json(coms);
    } catch (error) {
        res.status(500).json({message: 'Erreur serveur'});
    }
}

exports.deleteAComment = async (req, res) => {
    try {
        await Com.findByIdAndDelete(req.params.id_com);
        res.status(200).json({message: 'Article supprimé'});
    } catch (error) {
        res.status(500).json({message: 'erreur serveur'});
    }
}

exports.getAComment = async (req, res) => {
    try {
        const coms = await Com.findById(req.params.id_com);
        if (!coms) {
        res.status(200).json(coms);
        } else {
            res.status(204).json({message: 'Comment not found.'})
        }
    } catch (error) {
        res.status(500).json({message: 'erreur serveur'});
    }
}