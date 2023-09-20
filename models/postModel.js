const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
  content: {
    type: String,
    required: false,

  },
  
  ventalocation: {
    type: String,
    required: false,

  },

 
  tipoAlquiler: {
    type: String,
    required: false,

  },

 

  

  marca: {
    type: String,
    required: false,

  },

  modelo: {
    type: String,
    required: false,

  },

  wilaya: {
    type: String,
    required: false
  },

  commune: {
    type: String,
    required: false
  },


  ano: {
    type: String,
    required: false,

  },

  versionfinition: {
    type: String,
    required: false
  },

  motor: {
    type: String,
    required: false
  },

  inergia: {
    type: String,
    required: false
  },

  transmicion: {
    type: String,
    required: false
  },

  kilometraje: {
    type: String,
    required: false
  },

  color: {
    type: String,
    required: false
  },

  papeles: {
    type: String,
    required: false
  },

  specifications: {
    type: Array,
    required: false,
  },

  discripcion: {
    type: String,
    required: false
  },

  price: {
    type: Number,
    required: false
  },
   
  pricelocacion: {
    type: Number,
    required: false
  },
  

  dinero: {
    type: String,
    required: false
  },

  negociable: {
    type: String,
    required: false

  },

  

  nomprenom: {
    type: String,
    required: false
  },

  telefono: {
    type: String,
    required: false
  },

  email: {
    type: String,
    required: false
  },
 
  
  privacidad_commentarios: {
    type: String,
    required: false
  },

  privacidad_informations: {
    type: String,
    required: false
  },


  images: {
    type: Array,
    required: true
  },

  estado: {
    type: String,
    enum: ['pendiente', 'aprovado', 'rechazado'],
    default: 'pendiente'
  },
 
  //vistas: { type: Number, default: 0 },


  likes: [{ type: mongoose.Types.ObjectId, ref: 'user' }],
  comments: [{ type: mongoose.Types.ObjectId, ref: 'comment' }],
  user: { type: mongoose.Types.ObjectId, ref: 'user' }
}, {
  timestamps: true
})
module.exports = mongoose.model('post', postSchema)