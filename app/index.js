const express = require('express');

require('dotenv').config();

const app = express();
const port = 3000;

const hotelRoutes = require('./routes/hotelRoutes');
require('./db');

app.use(express.json());
app.use('/hotels', hotelRoutes);

app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});