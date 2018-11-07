let moongoose = require('mongoose');
let Schema = moongoose.Schema;

/*
const places = [
    {
        name: 'Plaza de Bolivar',
        description: 'lorem ipsum'
    },
    {
        name: 'Centro Comercial Unicentro'
    }
]
*/

let PlaceSchema = Schema({
name: {
    type: String,
    required: true
},
description: {
    type: String, 
    required: true
},
location: 
{
    type: String, 
    required: true
} 
},{
    versionKey: false
});

module.exports = moongoose.model('Place', PlaceSchema);
