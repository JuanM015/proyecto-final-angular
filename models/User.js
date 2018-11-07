let moongoose = require('mongoose');
let Schema = moongoose.Schema;

let UserSchema = Schema({
    name: {
        type: String,
        required: true
    },
    lastname: {
        type: String, 
        required: true
    },
    age: 
    {
        type: String, 
        required: true
    } 
    },{
        versionKey: false
    });
    
    module.exports = moongoose.model('User', UserSchema);