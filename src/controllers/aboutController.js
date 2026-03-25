const About = require('../models/About');

exports.get = async (req, res, next) => {
  try {
    const about = await About.findOne();
    res.json(about || { content: '' });
  } catch (err) { next(err); }
};

exports.update = async (req, res, next) => {
  try {
    const about = await About.findOneAndUpdate(
      {},
      { content: req.body.content },
      { upsert: true, new: true }
    );
    res.json(about);
  } catch (err) { next(err); }
};
