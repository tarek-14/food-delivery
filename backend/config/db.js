import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://tarek141203:14122003@cluster0.z9btm.mongodb.net/food-del')
    .then(()=>{
        console.log("DB Connected");
    })
}