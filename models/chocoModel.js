const mongoose = require('mongoose');

const chocoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'a tour must have a name'],
        unique: true,
        trim:true
    }, 
    price: {
        type: Number,
        required: [true, 'a tour must have a price']
    },
    code: {
        type: Number,
        required: [true, 'a tour must have a name'],
        unique: true,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
  
    quantity: {
        type: Number
       
    },
    weight:  {
        type: String
      
    },
    priceDiscount: Number,
    imageCover: {
        type: String,

    }
   
});
const Choco = mongoose.model('Choco',chocoSchema);

module.exports = Choco;

