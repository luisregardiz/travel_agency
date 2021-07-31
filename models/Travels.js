import Sequelize from 'sequelize';
import db from '../config/db.js';

//Creando un modelo para viajes (Consultar la informacion de la base de datos)
export const Travels = db.define('viajes', {
  titulo: {
    type: Sequelize.STRING
  },
  precio: {
    type: Sequelize.STRING
  },
  fecha_ida: {
    type: Sequelize.DATE
  },
  fecha_vuelta: {
    type: Sequelize.DATE
  },
  imagen: {
    type: Sequelize.STRING
  },
  descripcion: {
    type: Sequelize.STRING
  },
  disponibles: {
    type: Sequelize.STRING
  },
  slug: {
    type: Sequelize.STRING
  }
})
