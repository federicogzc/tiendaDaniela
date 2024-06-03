const Sequelize = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:', { logging: false });

console.log(sequelize);

// Importar definiciones de modelo
const defineProduct = require('./Product');
const defineUser = require('./User');
const defineSale = require('./Sale');
const defineRole = require('./Role');

// Definir modelos
const Product = require('./Product')(sequelize);
const User = require('./User')(sequelize);
const Sale = require('./Sale')(sequelize);
const Role = require('./Role')(sequelize);

// Establecer relaciones
User.belongsTo(Role, { foreignKey: 'roles_id' });
Role.hasMany(User, { foreignKey: 'roles_id' });
Sale.belongsTo(User, { foreignKey: 'users_id' });
Sale.belongsTo(Product, { foreignKey: 'products_id' });
User.hasMany(Sale, { foreignKey: 'users_id' });
Product.hasMany(Sale, { foreignKey: 'products_id' });

sequelize.sync({ force: true }).then(() => {
    console.log('Tablas creadas y sincronizadas');
}).catch(error => {
    console.error('Error al sincronizar las tablas:', error);
});

module.exports = { Product, User, Sale, Role, sequelize };
