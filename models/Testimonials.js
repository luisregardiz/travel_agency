import Sequelize from 'sequelize';
import db from '../config/db.js';

//Creando un modelo para testimonials (Consultar la informacion de la base de datos)
export const Testimonial = db.define('testimonials', {
  name: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  message: {
    type: Sequelize.STRING
  }
})
