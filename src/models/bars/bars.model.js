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
    Dive: {type: DataTypes.STRING},
    Sports: {type: DataTypes.STRING},
    Cocktail: {type: DataTypes.STRING},
    Club: {type: DataTypes.STRING},
    Gay: {type: DataTypes.STRING},
    Brewery: {type: DataTypes.STRING},
    Pub: {type: DataTypes.STRING},
    Smoking: {type: DataTypes.STRING}
}

module.exports = bar;
