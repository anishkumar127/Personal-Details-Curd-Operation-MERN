import mongoose from 'mongoose';
import {mongoURI} from './index.js';
const connectDB  = async  () =>{  
    try{
  const connection = await mongoose.connect(mongoURI);
 
   if(connection){
    console.log("connected successfully...");
   }
 } catch (error){
    console.log(error);
   }
}

export default connectDB;