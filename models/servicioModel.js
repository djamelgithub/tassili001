const mongoose = require('mongoose');

const servicioSchema = new mongoose.Schema({
  content: {
    type: String,
    required: false,
  },
  
  
  opcionesservicio: {
    type: String,
    required: false,
  },

  discripcion: {
    type: String,
    required: false
  },

  precioservicio: {
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

  tipoTransaccion: {
    type: String,
    default: 'servicio', // Puedes establecer el valor predeterminado aquí
    required: true,
  },
  

  wilaya: {
    type: String,
    required: false
  },

  commune: {
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
  
  comentarios: {
    type: String,
    required: false
  },

  privacidad_informations: {
    type: String,
    required: false
  },

  images: {
    type: Array,
    required: true,
    maxlength: 7
  },

  estado: {
    type: String,
    enum: ['pendiente', 'aprovado', 'rechazado'],
    default: 'pendiente'
  },
 
  vistas: { type: Number, default: 0 },

  likes: [{ type: mongoose.Types.ObjectId, ref: 'user' }],
  comments: [{ type: mongoose.Types.ObjectId, ref: 'comment' }],
  user: { type: mongoose.Types.ObjectId, ref: 'user' }
}, {
  timestamps: true
});

module.exports = mongoose.model('servicio', servicioSchema);
