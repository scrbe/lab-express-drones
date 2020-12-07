// Iteration #1
const dummyDrone = [
    { name: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
    { name: 'Racer 57', propellers: 4, maxSpeed: 20 },
    { name: 'Courier 3000i', propellers: 6, maxSpeed: 18 }
];
  
const mongoose = require('mongoose')
const Drone = require('../models/Drone.model')
const dotenv = require('dotenv').config()
const dbOptions = { // para qué es dbOptions ? 
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

async function seedDb() {
    await mongoose.connect(process.env.MONGODB_URL, dbOptions)
    const droneTest = await Drone.create(dummyDrone)
    console.log('This is the info for our seedDb function:', droneTest)
    mongoose.connection.close()
}

seedDb()