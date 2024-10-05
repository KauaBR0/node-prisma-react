const express = require('express');
const userRoutes = require('./routes/userRoutes');
const documentRoutes = require('./routes/documentRoutes');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors())

app.use('/api/users', userRoutes);
app.use('/api/documents', documentRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;