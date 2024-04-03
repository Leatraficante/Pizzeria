const passportStrategiesEnum = {
    JWT: 'jwt',
    NOTHING: 'na',
};

const accessRolesEnum = {
    ADMIN: 'ADMIN',
    USER: 'USER',
    PUBLIC: 'PUBLIC',
};

// const EErrors = {
//     ROUTING_ERROR: 1,
//     INVALID_TYPE_ERROR: 2,
//     USER_NOT_FOUND: 3,
//     PRODUCT_NOT_FOUND: 4,
//     INTERNAL_SERVER_ERROR: 5,
//     DATABASE_ERROR: 6
// };

const addressTypes = {
    CASA: 'CASA',
    TRABAJO: 'TRABAJO',
    OTRA: 'OTRA'
};

const categoryTypes = {
    ESPECIAL: 'ESPECIAL',
    CLASICA: 'CLASICA',
    ORIGINAL: 'ORIGINAL',
    VEGANA: 'VEGANA'

};

const sizeTypes = {
    GRANDE: 'GRANDE',
    MEDIANA: 'MEDIANA',
    INDIVIDUAL: 'INDIVIDUAL'
};

const estadoOrdenTypes = {
    PENDIENTE: 'PENDIENTE',
    CANCELADA: 'CANCELADA',
    CONFIRMADA: 'CONFIRMADA',
    PAGADA: 'PAGADA'
};


export {
    passportStrategiesEnum,
    accessRolesEnum,
    addressTypes,
    categoryTypes,
    sizeTypes,
    estadoOrdenTypes
};
