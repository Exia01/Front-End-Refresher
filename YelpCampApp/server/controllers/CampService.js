// let CR = require('../controllers/CampController')
var CR = require('../models/CampSchema')

async function camp_list(){
  const result = [];
  try{
    const data = await CR.find({})
    return data;
  }
  catch(e) {
    return e;
  }
}
module.exports = {
  camp_list: camp_list
};
