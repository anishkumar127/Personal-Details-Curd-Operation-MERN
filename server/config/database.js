import mongoose from 'mongoose';
// import {mongoUr} from
const connectDB  = async  () =>{  
    try{
  const connection = await mongoose.connect("mongodb://localhost:27017/curd-mern");

   if(connection){
    console.log("connected successfully...");
   }
 } catch (error){
    console.log(error);
   }
}

export default connectDB;