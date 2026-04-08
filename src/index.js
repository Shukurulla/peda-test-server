require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const connectDB = require('./config/db');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));
app.use('/images', express.static(path.join(__dirname, '../images')));
app.use('/materials', express.static(path.join(__dirname, '../materials')));

app.use('/api/auth', require('./routes/auth'));
app.use('/api/test-sections', require('./routes/testSections'));
app.use('/api/tests', require('./routes/tests'));
app.use('/api/test-results', require('./routes/testResults'));
app.use('/api/image-tests', require('./routes/imageTests'));
app.use('/api/image-test-submissions', require('./routes/imageTestSubmissions'));
app.use('/api/materials', require('./routes/materials'));
app.use('/api/about', require('./routes/about'));

app.get('/delete-account', (req, res) => {
  res.send(`<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Akkauntni o'chirish — Discourse.stud</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: #f8fafc; color: #1e293b; line-height: 1.7; }
    .container { max-width: 700px; margin: 0 auto; padding: 40px 20px; }
    h1 { font-size: 28px; margin-bottom: 8px; color: #4f46e5; }
    .date { color: #94a3b8; margin-bottom: 32px; }
    h2 { font-size: 18px; margin: 24px 0 8px; color: #334155; }
    p, li { color: #475569; margin-bottom: 8px; }
    ul { padding-left: 20px; }
    .email-link { color: #4f46e5; text-decoration: none; font-weight: 600; }
  </style>
</head>
<body>
  <div class="container">
    <h1>Akkauntni o'chirish</h1>
    <p class="date">Discourse.stud</p>

    <h2>Akkauntni qanday o'chirish mumkin?</h2>
    <p>Agar siz Discourse.stud ilovasidagi akkauntingizni o'chirmoqchi bo'lsangiz, quyidagi qadamlarni bajaring:</p>
    <ul>
      <li>Quyidagi email manziliga xat yuboring: <a class="email-link" href="mailto:imaxitcompany@gmail.com">imaxitcompany@gmail.com</a></li>
      <li>Xat mavzusiga: <strong>"Akkauntni o'chirish so'rovi"</strong> deb yozing</li>
      <li>Xat matnida ro'yxatdan o'tgan email manzilingizni va ismingizni yozing</li>
    </ul>

    <h2>Qanday ma'lumotlar o'chiriladi?</h2>
    <ul>
      <li>Shaxsiy ma'lumotlaringiz (ism, email)</li>
      <li>Test natijalari va javoblaringiz</li>
      <li>Rasm testlariga yozgan matnlaringiz</li>
    </ul>

    <h2>O'chirish muddati</h2>
    <p>Akkauntingiz va barcha bog'liq ma'lumotlar so'rov qabul qilinganidan keyin <strong>7 ish kuni</strong> ichida to'liq o'chiriladi.</p>

    <h2>Bog'lanish</h2>
    <p>Savollar bo'lsa: <a class="email-link" href="mailto:imaxitcompany@gmail.com">imaxitcompany@gmail.com</a></p>
  </div>
</body>
</html>`);
});

app.get('/privacy-policy', (req, res) => {
  res.send(`<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Maxfiylik siyosati — Discourse.stud</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: #f8fafc; color: #1e293b; line-height: 1.7; }
    .container { max-width: 700px; margin: 0 auto; padding: 40px 20px; }
    h1 { font-size: 28px; margin-bottom: 8px; color: #4f46e5; }
    .date { color: #94a3b8; margin-bottom: 32px; }
    h2 { font-size: 18px; margin: 24px 0 8px; color: #334155; }
    p, li { color: #475569; margin-bottom: 8px; }
    ul { padding-left: 20px; }
  </style>
</head>
<body>
  <div class="container">
    <h1>Maxfiylik siyosati</h1>
    <p class="date">Discourse.stud — Oxirgi yangilanish: 2026-yil, aprel</p>

    <h2>1. Qanday ma'lumotlar yig'iladi</h2>
    <ul>
      <li>Ism va email manzil — ro'yxatdan o'tishda</li>
      <li>Test natijalari va javoblar — test yechish jarayonida</li>
      <li>Rasm testlariga yozilgan matnlar</li>
    </ul>

    <h2>2. Ma'lumotlar qanday ishlatiladi</h2>
    <ul>
      <li>Foydalanuvchini tizimga kiritish va autentifikatsiya</li>
      <li>Test natijalarini saqlash va ko'rsatish</li>
      <li>O'qituvchilarga talabalar progressini ko'rsatish</li>
    </ul>

    <h2>3. Ma'lumotlarni ulashish</h2>
    <p>Foydalanuvchi ma'lumotlari uchinchi tomonlarga berilmaydi va sotilmaydi.</p>

    <h2>4. Ma'lumotlar xavfsizligi</h2>
    <p>Barcha ma'lumotlar HTTPS protokoli orqali shifrlangan holda uzatiladi. Parollar bcrypt algoritmi bilan xeshlanadi.</p>

    <h2>5. Foydalanuvchi huquqlari</h2>
    <p>Foydalanuvchi istalgan vaqtda hisobini o'chirishni so'rashi mumkin. Buning uchun administrator bilan bog'laning.</p>

    <h2>6. Bog'lanish</h2>
    <p>Savollar bo'lsa, administrator bilan bog'laning.</p>
  </div>
</body>
</html>`);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({ message: err.message || 'Server xatosi' });
});

const PORT = process.env.PORT || 5000;
connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
