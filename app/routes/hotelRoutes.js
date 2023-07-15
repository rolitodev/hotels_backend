const express = require('express');
const router = express.Router();

const authMiddleware = require('../middlewares/authMiddleware')
const hotelController = require('../controllers/hotelController');
const authController = require('../controllers/authController');

router.post('/login', authController.login);

// Ruta para obtener todos los hoteles
router.get('/', authMiddleware.authenticateToken, hotelController.getAllHotels);

// Ruta para obtener un hotel por su ID
router.get('/:id', authMiddleware.authenticateToken, hotelController.getHotelById);

// Ruta para crear un nuevo hotel
router.post('/', authMiddleware.authenticateToken, hotelController.createHotel);

// Ruta para actualizar un hotel existente
router.put('/:id', authMiddleware.authenticateToken, hotelController.updateHotel);

// Ruta para eliminar un hotel
router.delete('/:id', authMiddleware.authenticateToken, hotelController.deleteHotel);

module.exports = router;