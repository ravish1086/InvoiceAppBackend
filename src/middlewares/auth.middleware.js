import jwt from "jsonwebtoken"
import { JWT_SECRET } from "../../constant.js";



function auth(req, res, next) {
    // Get token from header
    const token = req.header('Authorization').replace('Bearer ', '');

    // Check if no token
    if (!token) {
        return res.status(401).json({ msg: 'No token, authorization denied' });
    }

    try {
        // Verify 
        const decoded = jwt.verify(token, JWT_SECRET);
        // Add user from payload
        req.createdBy = decoded._doc.pan;

        console.log( req.createdBy)
        next();
    } catch (err) {
        res.status(401).json({ msg: 'Token is not valid'});
    }
}

export {auth}
