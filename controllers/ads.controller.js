const Ad = require('../models/Ad.model');

exports.getAll = async (req, res) => {
    try {
      res.json(await Ad.find());
    }
    catch(err) {
      res.status(500).json({ message: err });
    }
};

exports.getById = async (req, res) => {
    try {
        const dep = await Ad.findById(req.params.id);
        if(!dep) res.status(404).json({ message: 'Not found' });
        else res.json(dep);
    }
      catch(err) {
        res.status(500).json({ message: err });
    }
};

exports.postAll = async (req, res) => {
    try {
        const { title, description, publishDate, image, price, location, seller } = req.body;
        const newAd = new Ad({ title: title, description: description, publishDate: publishDate, image: image, price: price, location: location, seller: seller });
        await newAd.save();
        res.json({ message: 'OK' });
    
    } catch(err) {
        res.status(500).json({ message: err });
    }
};

exports.putById = async (req, res) => {
    const { title, description, publishDate, image, price, location, seller } = req.body;
    try {
        const dep = await Ad.findById(req.params.id);
        if(dep) {
            await Ad.updateOne({ _id: req.params.id }, { $set: { title: title, description: description, publishDate: publishDate, image: image, price: price, location: location, seller: seller }});
            res.json(dep);
        }
        else res.status(404).json({ message: 'Not found...' });
    }
    catch(err) {
        res.status(500).json({ message: err });
    }
};

exports.deleteById = async (req, res) => {
    try {
        const dep = await Ad.findById(req.params.id);
        if(dep) {
          await Ad.deleteOne({ _id: req.params.id });
          res.json(dep);
        }
        else res.status(404).json({ message: 'Not found...' });
    }
      catch(err) {
        res.status(500).json({ message: err });
    }
};

exports.getSearch = async (req, res) => {
    try {
      const dep = await Ad.find({ searchPhrase: req.params.title });
      if(!dep) res.status(404).json({ message: 'Not found' });
      else res.json(dep);
    }
    catch(err) {
      res.status(500).json({ message: err });
    }
};