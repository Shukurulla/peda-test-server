const User = require('../models/User');

async function seedAdmin() {
  const exists = await User.findOne({ email: 'admin@test.com' });
  if (exists) {
    console.log('Admin allaqachon mavjud');
    return;
  }
  await User.create({
    name: 'Admin',
    email: 'admin@test.com',
    password: 'admin123',
    role: 'admin'
  });
  console.log('Admin yaratildi: admin@test.com / admin123');
}

module.exports = seedAdmin;
