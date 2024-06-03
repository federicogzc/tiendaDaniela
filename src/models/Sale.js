const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Sale = sequelize.define('Sale', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        products_id: {
            type: DataTypes.UUID,
            allowNull: false
        },
        qty: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        sale_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        users_id: {
            type: DataTypes.UUID,
            allowNull: false
        }
    });

    return Sale;
};