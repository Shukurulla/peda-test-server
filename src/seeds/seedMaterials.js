const fs = require('fs');
const path = require('path');
const Material = require('../models/Material');

async function seedMaterials() {
  const materialsDir = path.join(__dirname, '../../../materials');
  const files = fs.readdirSync(materialsDir).filter(f => f.endsWith('.pdf'));

  for (const file of files) {
    const stats = fs.statSync(path.join(materialsDir, file));
    await Material.findOneAndUpdate(
      { originalFilename: file },
      {
        title: file.replace('.pdf', ''),
        description: '',
        fileUrl: `/materials/${encodeURIComponent(file)}`,
        fileSize: stats.size,
        originalFilename: file
      },
      { upsert: true }
    );
  }
  console.log(`${files.length} ta material seed qilindi`);
}

module.exports = seedMaterials;
