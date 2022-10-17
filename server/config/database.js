import mongoose from 'mongoose';

const connectDB  = async  () =>{  
    try{
  const connection = await mongoose.connect("mongodb+srv://anishkumar:anishking@cluster0.ybty6.mongodb.net/crud-mern?retryWrites=true&w=majority");
  // mongodb://localhost:27017/curd-mern
   if(connection){
    console.log("connected successfully...");
   }
 } catch (error){
    console.log(error);
   }
}

export default connectDB;