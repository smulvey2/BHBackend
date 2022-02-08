const {Sequelize, Op} = require('sequelize')
const BarService = require("../services/bars/bars.service.js");
const db = require("../models/db.js");
const service = new BarService(db.models.bars); 

exports.getBarsByLocation = async (req, res, next) => {
          
    let coords = req.params.location;
    const coordArray = coords.split(", ");
    const latitude = coordArray[0];
    const longitude = coordArray[1];
    const bars = await service.getWhere({
        where: Sequelize.where( Sequelize.fn("ST_DistanceSphere",
        Sequelize.fn("ST_MakePoint", parseFloat(longitude), parseFloat(latitude)),
        Sequelize.fn("ST_MakePoint", Sequelize.col("long"), Sequelize.col("lat"))), Op.lte, 1000)
        
      });
    res.status(200);
    return res.json(bars);
}

 exports.addBarUser = async(req) => {
   let input = req.params.input;
   const inputArray = input.split(", ");
   const barId = BigInt(inputArray[0]);
   const user = inputArray[1];
   const bar = await service.getWhere({where:{id: barId}});
   let list = bar[0].dataValues.users
   let newList = []
   if(list == null){
      newList.push(user)
   }
   else{
     newList = list;
     if(!newList.includes(user)){
     newList.push(user);
     }
   }
   console.log(newList)
   await service.update({users: newList}, {where: {id: barId}})
 }

 exports.removeBarUser = async(req) => {
  let input = req.params.input;
  const inputArray = input.split(", ");
  const barId = BigInt(inputArray[0]);
  const user = inputArray[1];
  const bar = await service.getWhere({where:{id: barId}});
  let list = bar[0].dataValues.users
  let newList = []
  newList = list;
  const index = newList.indexOf(user);
  if (index > -1) {
  newList.splice(index, 1);
  }
  console.log(newList)
  await service.update({users: newList}, {where: {id: barId}})
} 
// export default barController;
