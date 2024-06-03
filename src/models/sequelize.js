const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: path.join(__dirname, 'database.db'), 
    logging: true
});

const modelDefiners = [
    require('./Product'), 
    require('./User'),
    require('./Sale'),
    require('./Role')
];

// Definir todos los modelos
for (const modelDefiner of modelDefiners) {
    modelDefiner(sequelize);
}

// Aplicar relaciones
const { Product, User, Sale, Role } = sequelize.models;
User.belongsTo(Role);
Role.hasMany(User);
Sale.belongsTo(User);
Sale.belongsTo(Product);
User.hasMany(Sale);
Product.hasMany(Sale);

// Sincronizar todas las definiciones de modelos con la base de datos
sequelize.sync().then(() => {
    console.log("Tablas creadas y sincronizadas");
    sequelize.getQueryInterface().showAllTables().then((tables) => {
        console.log("Tablas existentes en la base de datos:", tables);
    });
}).catch(error => {
    console.error("Error al sincronizar las tablas:", error);
});

module.exports = sequelize;
