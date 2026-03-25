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

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({ message: err.message || 'Server xatosi' });
});

const PORT = process.env.PORT || 5000;
connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
