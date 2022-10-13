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
}

export default userController;