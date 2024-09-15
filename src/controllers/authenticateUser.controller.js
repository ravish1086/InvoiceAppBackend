import { JWT_SECRET } from "../../constant.js";
import { User } from "../models/user.model.js"
import jwt from "jsonwebtoken"


const authenticateUser = async (req,res) => {
    try{
        let authenticatedUser = await User.findOne({pan:req.body.userId});
        if(!authenticatedUser){
            return res.status(400).json({ msg: 'Invalid credentials' });
        }
        else {
            const payload = {
                ...authenticatedUser
            };

            jwt.sign(
                payload,
                JWT_SECRET,
                { expiresIn: '30s' }, // Token expires in 1 hour
                (err, token) => {
                    if (err) throw err;
                    res.status(200).json({ message:"Successfully Authenticated", userInfo:authenticatedUser, token });
                }
            );
        }

    }
    catch(error){
        res.status(500).json({message: error.message})
    }
}

export {authenticateUser}