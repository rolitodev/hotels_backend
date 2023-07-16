const jwt = require('jsonwebtoken');
const secretKey = process.env.SECRET_KEY; // Clave secreta para firmar los tokens

const login = (req, res) => {

  // Generar un token JWT con fecha de vencimiento
  const expiresIn = 24 * 60 * 60; // Tiempo de expiración en segundos (24 horas en este ejemplo)
  const expirationDate = Math.floor(Date.now() / 1000) + expiresIn; // Calcular la fecha de vencimiento en segundos
  const token = jwt.sign({ userId: '' }, secretKey, { expiresIn });

  // Devolver el token y la fecha de vencimiento como respuesta
  res.json({ token, expiresIn: expirationDate });

};

module.exports = {
  login
};
