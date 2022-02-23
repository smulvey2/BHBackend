const {Sequelize, Op} = require('sequelize')
const BarService = require("../services/bars/bars.service.js");
const db = require("../models/db.js");
const service = new BarService(db.models.bars); 

exports.getBarsByLocation = async (req, res, next) => {
    console.log('Nearby Bars')
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
   console.log('Add Bar User')
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
   await service.update({users: newList}, {where: {id: barId}})
 }

 exports.removeBarUser = async(req) => {
  console.log('Remove Bar User')
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
  await service.update({users: newList}, {where: {id: barId}})
} 

exports.writeDescription = async(req) => {
  console.log('Write Description')
  let input = req.params.input;
  const inputArray = input.split(", ");
  const barId = BigInt(inputArray[0]);
  const description = inputArray[1];
  await service.update({description: description}, {where: {id: barId}})
}

exports.writeReview = async(req) => {
  console.log('Write Review')
  let input = req.params.input;
  const inputArray1 = input.split("un1qu3spl1tt3rk3y")
  const inputArray2 = inputArray1[0].split(", ");
  const barId = BigInt(inputArray2[0]);
  const user = inputArray2[1];
  const uid = inputArray2[2]
  const review = inputArray1[1]
  const bar = await service.getWhere({where:{id: barId}});
  let ts = Date.now();
  let date_ob = new Date(ts);
  let minutes = date_ob.getMinutes();
  let hours = date_ob.getHours();
  let date = date_ob.getDate();
  let month = date_ob.getMonth() + 1;
  let year = date_ob.getFullYear();
  let timeDate = hours + ":" + minutes + "  " + month + "-" + date + "-" + year;
  const object = {user: user, review: review, date: timeDate, uid: uid}
  let list = bar[0].dataValues.reviews
  let newList = []
  if(list == null){
     newList.push(object)  
  }
  else{
    newList = list;
    newList.push(object);
  }

  await service.update({reviews: newList}, {where: {id: barId}})
}


exports.deleteReview = async(req) => {
  console.log('Delete Review')
  let input = req.params.input;
  const inputArray = input.split(", ");
  const barId = BigInt(inputArray[0]);
  const index = inputArray[1];
  const bar = await service.getWhere({where:{id: barId}});
  let list = bar[0].dataValues.reviews
  if (index > -1) {
  list.splice(index, 1);
  }
  await service.update({reviews: list}, {where: {id: barId}})
} 
// export default barController;
