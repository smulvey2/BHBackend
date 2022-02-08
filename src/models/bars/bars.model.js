const { Sequelize } = require("sequelize");
const { DataTypes } = Sequelize;

const bar = {
    id: { type: DataTypes.BIGINT, primaryKey: true },
    name: { type: DataTypes.STRING },
    latitude: {type: DataTypes.BIGINT, field: "lat"},
    longitude: {type: DataTypes.BIGINT, field: "long"},
    users: {type: DataTypes.ARRAY(DataTypes.STRING)}
}

module.exports = bar;