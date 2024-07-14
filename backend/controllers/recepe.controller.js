const Recepe = require('../models/recepe');

exports.index = async (req, res)=>{
    const recepes = await Recepe.find();
    return res.json(recepes)
};

exports.store = async (req, res)=>{
    const data = {
        title: req.body.title,
        image_url: req.file.path,
        ingredients: req.body.ingredients,
        instructions: req.body.instructions,
        video_link: req.body.video_link
    }
    const recepe = await Recepe.create(data);
    return res.json(recepe);
};

exports.show = async (req, res)=>{
    const recepe = await Recepe.findById(req.params.id);
    return recepe ? res.json(recepe) : res.status(404).json({ message: 'Not found!' });
};

exports.update = async (req, res)=>{
    const data = {
        title: req.body.title,
        image_url: req.file.path,
        ingredients: req.body.ingredients,
        instructions: req.body.instructions,
        video_link: req.body.video_link
    }
    const recepe = await Recepe.findByIdAndUpdate(req.params.id, data, {new: true});
    return recepe ? res.json(recepe) : res.status(404).json({ message: 'Not found!' });
};

exports.delete = async (req, res)=>{
    const recepe = await Recepe.findByIdAndDelete(req.params.id);
    return recepe ? res.json(recepe) : res.status(404).json({ message: 'Not found!' });
};