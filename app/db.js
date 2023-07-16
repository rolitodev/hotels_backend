const mongoose = require('mongoose');
const config = require('./config');

mongoose.connect(`mongodb+srv://${config.database.user}:${config.database.password}@${config.database.cluster}/?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('[INFO]: Conexión exitosa a la base de datos'))
  .catch(error => console.error('Error al conectar a la base de datos:', error));