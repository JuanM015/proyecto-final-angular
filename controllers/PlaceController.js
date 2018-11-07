let Place = require('../models/Place')

let PlaceController = {
    // LISTA POR TODOS LOS LUGARES
    show(req, res) {
        Place.find({})
            .then(docs => {
                res.status(200).json(docs)
            }).catch(err => {
                res.json(err)
            })
     //   return res.status(200).json(places);
    },

    // BUSCAR UN LUGAR POR ID
    find (req, res){
        Place.findById({
            _id: req.params.id
        })
        .then(doc => {
            res.json(doc)
        }).catch(err => {
            res.json(err)
        })
    },

    // ACTUALIZAR
    update (req, res){
        Place.update({
            _id: req.params.id
        }, {
            name: req.body.name,
            description: req.body.description
        }).then(doc => {
            res.json(doc)
        }).catch(err => {
            res.json(err)
        })
    },

    // ELIMINAR

    destroy(req, res){
        Place.findByIdAndRemove({
            _id: req.params.id
        })
        .then(docs => {
            res.json(doc)
        }).catch(err => {
            res.json(err)
        })
    },

    // CREAR
    store(req, res){
        Place.create({
            name: req.body.name,
            description: req.body.description,
            location: req.body.location
        }).then(doc => {
            res.json(doc)
        }).catch(err => {
            res.json(err)
        })
    }
}

module.exports = PlaceController;

// UN CONTROLADOR NECESITA OBLIGATORIAMENTE UN MODELO, PUESTO QUE NO SE COMUNICAN CON LAS RUTAS
// EL MODELO SE COMUNICA CON LA BASE DE DATOS, PERO SE COMUNICA TAMBIÉN CON EL CONTROLADOR 
// IMPORTAR EL MODELO PARA CONOCER QUE VAMOS A COMUNICAR