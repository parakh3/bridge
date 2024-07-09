const express = require('express');
const cors = require('cors');
const tokenRoutes = require('./routes/tokenRoutes');

const app = express();
app.use(cors()); // Enable CORS
app.use(express.json());

app.use('/api', tokenRoutes);


app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

module.exports = app;
