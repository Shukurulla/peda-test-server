require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = require('../config/db');

const seedAdmin = require('./seedAdmin');
const seedTests = require('./seedTests');
const seedImages = require('./seedImages');
const seedMaterials = require('./seedMaterials');
const seedAbout = require('./seedAbout');

async function runSeeds() {
  try {
    await connectDB();
    console.log('Seed boshlanmoqda...\n');

    await seedAdmin();
    await seedTests();
    await seedImages();
    await seedMaterials();
    await seedAbout();

    console.log('\nBarcha seedlar muvaffaqiyatli yakunlandi!');
    process.exit(0);
  } catch (err) {
    console.error('Seed xatosi:', err);
    process.exit(1);
  }
}

runSeeds();
