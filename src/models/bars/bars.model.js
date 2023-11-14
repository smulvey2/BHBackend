const { Sequelize } = require("sequelize");
const { DataTypes } = Sequelize;

const bar = {
    id: { type: DataTypes.BIGINT, primaryKey: true },
    name: { type: DataTypes.STRING },
    latitude: {type: DataTypes.BIGINT, field: "latitude"},
    longitude: {type: DataTypes.BIGINT, field: "longitude"},
    users: {type: DataTypes.ARRAY(DataTypes.STRING)},
    reviews: {type:DataTypes.ARRAY(DataTypes.JSON)},
    description: {type: DataTypes.STRING},
    category: {type: DataTypes.STRING}
}

module.exports = bar;
