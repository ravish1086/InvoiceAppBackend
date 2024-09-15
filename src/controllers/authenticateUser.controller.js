import { JWT_SECRET } from "../../constant.js";
import { User } from "../models/user.model.js"
import jwt from "jsonwebtoken"


const authenticateUser = async (req,res) => {
    try{
        let authenticatedUser = await User.findOne({pan:req.body.userId});
        if(!authenticatedUser){
            return res.status(200).json({ msg: 'Invalid credentials', status:false });
        }
        else {
            const payload = {
                ...authenticatedUser
            };

            jwt.sign(
                payload,
                JWT_SECRET,
                // Token expires in 1 hour  { expiresIn: '30s' },
                (err, token) => {
                    if (err) throw err;
                    res.status(200).json({ message:"Successfully Authenticated", status:true, userInfo:authenticatedUser, token });
                }
            );
        }

    }
    catch(error){
        res.status(500).json({message: error.message})
    }
}

export {authenticateUser}