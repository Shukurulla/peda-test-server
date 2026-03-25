const ImageTest = require('../models/ImageTest');

exports.getAll = async (req, res, next) => {
  try {
    const images = await ImageTest.find().sort('number');
    res.json(images);
  } catch (err) { next(err); }
};

exports.create = async (req, res, next) => {
  try {
    const image = await ImageTest.create(req.body);
    res.status(201).json(image);
  } catch (err) { next(err); }
};
