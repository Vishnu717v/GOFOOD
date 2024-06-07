const mongoose = require("mongoose");
const mongoURI = "mongodb+srv://pantherff007:k9WqWja3AsOpvFiz@food.z2l4h8s.mongodb.net/gofoodmern?retryWrites=true&w=majority";

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connected to Mongo Successfully!");
    const fetched_data = await mongoose.connection.db.collection("food_Items").find({}).toArray();
    const foodCategory = await mongoose.connection.db.collection("foodCategory").find({}).toArray();
    global.food_Items = fetched_data;
    
    global.foodCategory = foodCategory;
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectToMongo;