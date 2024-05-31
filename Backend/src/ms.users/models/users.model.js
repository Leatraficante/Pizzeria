import mongoose from 'mongoose';
import { accessRolesEnum, addressTypes } from '../../configs/enums.js';
import { validateEmail, validatePassword, validatePhoneNumber } from '../../utils/validators.js';

const usersCollection = 'users';

const addressSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    unique: true,
  },
  tipo: {
    type: String,
    enum: Object.values(addressTypes),
    required: true,
  },
  calle: {
    type: String,
    required: true,
  },
  numero: {
    type: Number,
    required: true,
  },
  localidad: {
    type: String,
    required: true,
  },
  cp: {
    type: Number,
    required: true,
  },
  telefono: {
    type: String,
    required: true,
    validate: {
      validator: validatePhoneNumber,
      message: (props) => `${props.value} no es un número de teléfono válido`,
    },
  },
  indicaciones: {
    type: String,
  },
});

const usersSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
      match: [/^[a-zA-Z]+$/, 'El nombre solo puede contener letras'],
    },
    apellido: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      index: true,
      validate: {
        validator: validateEmail,
        message: (props) => `${props.value} no es un correo electrónico válido`,
      },
    },
    fechaNacimiento: {
      type: Date,
      required: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
      validate: {
        validator: validatePassword,
        message: (props) => `${props.value} no es una contraseña segura`,
      },
    },
    direcciones: {
      type: [addressSchema],
      validate: {
        validator: function (direcciones) {
          return direcciones.length <= 3;
        },
        message: 'No se pueden agregar más direcciones, se ha alcanzado el límite máximo.',
      },
    },
    role: {
      type: String,
      default: accessRolesEnum.USER,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const userModel = mongoose.model(usersCollection, usersSchema);

export default userModel;
