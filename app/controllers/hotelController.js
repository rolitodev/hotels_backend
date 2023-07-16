const Hotel = require('../models/hotel');

// Obtener todos los hoteles
const getAllHotels = (req, res) => {
  Hotel.find()
    .sort({ createdAt: -1 }) // Ordenar por createdAt en orden descendente (-1)
    .then(hotels => res.json(hotels))
    .catch(error => res.status(500).json({ error: 'Error al obtener los hoteles', ...error }));
};

// Obtener un hotel por su ID
const getHotelById = (req, res) => {
  const hotelId = req.params.id;
  Hotel.findById(hotelId)
    .then(hotel => {
      if (hotel) {
        res.json(hotel);
      } else {
        res.status(404).json({ error: 'Hotel no encontrado' });
      }
    })
    .catch(error => res.status(500).json({ error: 'Error al obtener el hotel', ...error }));
};

// Crear un nuevo hotel
const createHotel = (req, res) => {
  const { name, address, city, country, stars, description, image, createdAt } = req.body;
  const newHotel = new Hotel({ name, address, city, country, stars, description, image, createdAt });
  newHotel.save()
    .then(hotel => res.json(hotel))
    .catch(error => res.status(500).json({ message: 'Error al crear el intentar crear un hotel.', ...error }));
};

// Actualizar un hotel existente
const updateHotel = (req, res) => {
  const hotelId = req.params.id;
  const { name, address } = req.body;
  Hotel.findByIdAndUpdate(hotelId, { name, address }, { new: true })
    .then(hotel => {
      if (hotel) {
        res.json(hotel);
      } else {
        res.status(404).json({ error: 'Hotel no encontrado' });
      }
    })
    .catch(error => res.status(500).json({ error: 'Error al actualizar el hotel', ...error }));
};

// Eliminar un hotel
const deleteHotel = (req, res) => {
  const hotelId = req.params.id;
  Hotel.findByIdAndRemove(hotelId)
    .then(hotel => {
      if (hotel) {
        res.json({ message: 'Hotel eliminado correctamente' });
      } else {
        res.status(404).json({ error: 'Hotel no encontrado' });
      }
    })
    .catch(error => res.status(500).json({ error: 'Error al eliminar el hotel', ...error }));
};

// Controlador para filtrar hoteles por nombre
const filterHotelByName = async (req, res) => {
  const { name } = req.body;

  try {
    const hotels = await Hotel.find({ name: { $regex: name, $options: 'i' } });
    res.json(hotels);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener hoteles.', ...error });
  }
};

module.exports = {
  getAllHotels,
  getHotelById,
  createHotel,
  updateHotel,
  deleteHotel,
  filterHotelByName
};