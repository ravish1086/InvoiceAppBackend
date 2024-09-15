import {app} from "./app.js";
import dotenv from "dotenv"
import { DB_NAME } from "./constant.js";
import mongoose from "mongoose";
// import swaggerJsdoc from "swagger-jsdoc"
import connectDB from "./src/db/db.js";
// import swaggerUi from "swagger-ui-express"

const PORT=4500

console.log("Server COnfigured")
connectDB()
.then(() => {
    app.listen(process.env.PORT, ()=>{
        console.log(`Server is running at PORT ${PORT}`)
    })
})






// const connectionInstance = await mongoose.connect(process.env.MONGODB_URI+'/'+DB_NAME)

// console.log(connectionInstance)

// app.listen(process.env.PORT,(req,res)=>{
//     console.log("Server started at PORT: ",process.env.PORT);
// })