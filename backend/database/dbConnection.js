import mongoose from "mongoose";
const MONGO_URI = "mongodb+srv://10govindgupta10:govind123@cluster0.b7269d1.mongodb.net/?retryWrites=true"
export const dbConnection = () => {
  mongoose
    .connect(MONGO_URI, {
      dbName: "RESERVATIONS",
    })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log(`Some error occured while connecing to database: ${err}`);
    });
};
