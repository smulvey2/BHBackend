const { Sequelize } = require("sequelize");
const { DataTypes } = Sequelize;

const bar = {
    id: { type: DataTypes.BIGINT, field: "osm_id", primaryKey: true },
    name: { type: DataTypes.STRING },
    location: { type: DataTypes.STRING, field: "st_astext" }
}

module.exports = bar;