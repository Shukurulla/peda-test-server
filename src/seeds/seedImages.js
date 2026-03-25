const fs = require('fs');
const path = require('path');
const ImageTest = require('../models/ImageTest');

async function seedImages() {
  const imagesDir = path.join(__dirname, '../../../images');
  const files = fs.readdirSync(imagesDir).filter(f => f.endsWith('.jpg')).sort();

  for (let i = 0; i < files.length; i++) {
    await ImageTest.findOneAndUpdate(
      { number: i + 1 },
      {
        imageUrl: `/images/${encodeURIComponent(files[i])}`,
        originalFilename: files[i],
        number: i + 1
      },
      { upsert: true }
    );
  }
  console.log(`${files.length} ta rasm seed qilindi`);
}

module.exports = seedImages;
