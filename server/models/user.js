import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    emai:{
        type:String,
       require:true,
    },
    age:{
        type:Number,
    }
})

const userModel = mongoose.model("users",userSchema);

export default userModel;