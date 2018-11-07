let express = require('express');
let PlaceController = require('../controllers/PlaceController');
let UserController = require('../controllers/UserController');

let router = express.Router();

// LISTA TODOS LOS LUGARES
router.get('/places', PlaceController.show);

// CREA UN LUGAR
router.post('/places', PlaceController.store);

// BUSCA UN LUGAR POR ID
router.get('/places/:id', PlaceController.find);

// ELIMINA UN LUGAR
router.get('/places/:id', PlaceController.destroy);

// ACTUALIZA UN LUGAR
router.get('places/:id', PlaceController.update);

// CREA UN LUGAR
router.post('/user', UserController.store);

// BUSCA UN LUGAR POR ID
router.get('/user/:id', UserController.find);

module.exports = router;
