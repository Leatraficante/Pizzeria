import mongoose from "mongoose";
import { estadoOrdenTypes } from "../../configs/enums.js";

const pedidosCollection = 'pedidos';

const pedidosSchema = new mongoose.Schema({
    codigo: {
        type: String,
        required: true,
        unique: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    precioTotal: {
        type: Number,
        required: true,
        min: 0
    },
    usuario: {
        type: mongoose.Schema.Types.Mixed, 
        required: true
    },
    estado: {
        type: String,
        enum: Object.values(estadoOrdenTypes),
        required: true,
        default: estadoOrdenTypes.PENDIENTE,
    },
    productos: [
        {
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'products',
                required: true
            },
            cantidad: {
                type: Number,
                required: true,
                min: 1
            },
            precioUnitario: {
                type: Number,
                required: true,
                min: 0
            }
        }
    ]
}, {
    timestamps: true
});

pedidosSchema.index({usuario: 1});

pedidosSchema.path('productos').validate(function(value) {
    return value.length > 0;
}, 'Debe haber al menos 1 producto en el pedido.');

// actualizar fecha antes de guardar el pedido
pedidosSchema.pre('save', function(next) {
    this.updatedAt = new Date();
    next();
});

// eliminar productos asociados en cascada
pedidosSchema.pre('remove', function(next) {
    const productosIds = this.productos.map(producto => producto.productId);
    Producto.deleteMany({ _id: { $in: productosIds } })
        .then(() => next())
        .catch(err => next(err));
});

const pedidosModel = mongoose.model(pedidosCollection, pedidosSchema);

export default pedidosModel;
