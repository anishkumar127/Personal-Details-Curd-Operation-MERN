import userModel from '../models/user.js';
class userController{
    static getAllUser =async(req,res)=>{
        try{
            const allUser = await userModel.find({});
            if(allUser){
                return res.status(200).json(allUser);
            }

        }catch(error){
            return res.status(400).json(error);
        }
        // res.send("all user");
    };

    static createUser = async(req,res)=>{
        const {name,email,age} = req.body;
        try{
            if(name && email && age){
            const newUser = userModel({
                name:name,
                email:email,
                age:age,
            });
            const saved_User = await newUser.save();
            if(saved_User){
                return res.status(201).json(saved_User);
            }else{
                return res.status(400).json({"message":"something wrong!"});
            }
            }else{
                return res.status(400).json({"message":"all fields are required."});
            }

        }catch(error){
            return res.status(400).json(error);
        }
    };

    static getSingleUser = async(req,res)=>{
        const {id} = req.params;
        try{
            if(id){
             const getSingleData = await userModel.findById(id);
             return res.status(200).json(getSingleData);
            }else{
                return res.status(400).json({"message":"ID not found"});
            }
        }catch(error){
            return res.status(400).json(error);
        }
    };

    // edit & update
    static updateUser = async(req,res)=>{
        const {id} = req.params;  // dynamic id router get.
        try{
            if(id){
             const updatedUserData = await userModel.findByIdAndUpdate(id,req.body);
             return res.status(200).json(updatedUserData);
            }else{
                return res.status(400).json({"message":"ID not found"});
            }
        }catch(error){
            return res.status(400).json(error);
        }
    };
    static deleteUser = async(req,res)=>{
        const {id} = req.params;  // dynamic id router get.
        try{
            if(id){
             const deletedUserData = await userModel.findByIdAndDelete(id);
             return res.status(200).json(deletedUserData);
            }else{
                return res.status(400).json({"message":"ID not found"});
            }
        }catch(error){
            return res.status(400).json(error);
        }
    }
}

export default userController;