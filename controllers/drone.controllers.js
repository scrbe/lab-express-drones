const { all } = require('../app')
const Drone = require('../models/Drone.model')

const getDrones = async (req, res) => {
  try {
    const allDrones = await Drone.find()
    console.log('This is the data of all the drones!',allDrones)
    res.render('drones/list', {allDrones})
  } catch (err) {
    console.log('there is an error in getDrones', err)
  }
  
}

module.exports = {
    getDrones
  }