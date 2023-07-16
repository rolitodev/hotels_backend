const express = require('express');
const cors = require('cors');

require('dotenv').config();

const app = express();
const port = 3000;

// Habilita CORS para todas las solicitudes
app.use(cors());

// Carga todas las rutas del API
const hotelRoutes = require('./routes/hotelRoutes');
app.use(express.json());
app.use('/hotels', hotelRoutes);

// Carga la conexión a la base de datos
require('./db');

app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});