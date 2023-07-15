const jwt = require('jsonwebtoken');
const secretKey = process.env.SECRET_KEY; // Clave secreta para verificar los tokens

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(' ')[1];

    jwt.verify(token, secretKey, (err, decodedToken) => {
      if (err) {
        return res.sendStatus(403); // Token inválido o expirado
      }

      req.userId = decodedToken.userId;
      next();
    });
  } else {
    res.sendStatus(401); // No se proporcionó el token de autenticación
  }
};

module.exports = {
  authenticateToken
};