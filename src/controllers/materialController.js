const Material = require('../models/Material');
const fs = require('fs');
const path = require('path');

exports.getAll = async (req, res, next) => {
  try {
    const materials = await Material.find().sort('-createdAt');
    res.json(materials);
  } catch (err) { next(err); }
};

exports.create = async (req, res, next) => {
  try {
    const { title, description } = req.body;
    const material = await Material.create({
      title,
      description,
      fileUrl: `/uploads/${req.file.filename}`,
      fileSize: req.file.size,
      originalFilename: req.file.originalname
    });
    res.status(201).json(material);
  } catch (err) { next(err); }
};

exports.update = async (req, res, next) => {
  try {
    const material = await Material.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!material) return res.status(404).json({ message: 'Material topilmadi' });
    res.json(material);
  } catch (err) { next(err); }
};

exports.delete = async (req, res, next) => {
  try {
    const material = await Material.findByIdAndDelete(req.params.id);
    if (!material) return res.status(404).json({ message: 'Material topilmadi' });
    // Delete file if it's in uploads
    if (material.fileUrl.startsWith('/uploads/')) {
      const filePath = path.join(__dirname, '../..', material.fileUrl);
      if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
    }
    res.json({ message: 'O\'chirildi' });
  } catch (err) { next(err); }
};
