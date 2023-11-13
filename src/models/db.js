
const { Sequelize } = require("sequelize");
const connection = require("./connection.json");
const bar = require("./bars/bars.model");


const db = new Sequelize({
  database: connection.database,
  username: connection.user,
  host: connection.host,
  port: connection.port,
  password: connection.password,
  dialect: "postgres",
});
try{
db.authenticate();
console.log("authenticated")
} catch(error) {
  console.error("no auth");
}
const config = {
  timestamps: false,
  freezeTableName: true,
  schema: "public"
};

db.define("importTest", bar, config);
//console.log(db)
module.exports = db;
