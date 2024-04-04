import mongoose from 'mongoose';
import { categoryTypes, sizeTypes } from '../../configs/enums.js';
import { isValidImageURL } from '../../utils/validators.js';

const productsCollection = 'products';

const productsSchema = new mongoose.Schema(
  {
    titulo: {
      type: String,
      required: true,
    },
    descripción: {
      type: String,
      required: true,
    },
    ingredientes: {
      type: String,
      required: true,
    },
    imágen: {
      type: String,
      required: true,
      validate: {
        validator: isValidImageURL,
        message: (props) => `${props.value} no es una URL de imagen válida`,
      },
    },
    codigo: {
      type: String,
      required: true,
      unique: true,
    },
    precio: {
      type: Number,
      required: true,
      min: 0,
    },
    stock: {
      type: Number,
      required: true,
      min: 0,
    },
    categoria: {
      type: String,
      enum: Object.values(categoryTypes),
      required: true,
    },
    tamaño: {
      type: String,
      enum: Object.values(sizeTypes),
      required: true,
    },
    diponibilidad: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  },
);

const productsModel = mongoose.model(productsCollection, productsSchema);

export default productsModel;
