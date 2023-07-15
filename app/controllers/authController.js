const jwt = require('jsonwebtoken');
const secretKey = process.env.SECRET_KEY; // Clave secreta para firmar los tokens

const login = (req, res) => {

  // generar un token JWT
  const token = jwt.sign({ userId: '' }, secretKey, { expiresIn: '24h' });

  // Devolver el token como respuesta
  res.json({ token });
};

module.exports = {
  login
};
