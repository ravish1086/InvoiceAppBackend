import mongoose from "mongoose";

const userSchema  = new mongoose.Schema({
    "companyName": {
      "type": "String"
    },
    "companyGSTIN": {
      "type": "String",
      "unique":true
    },
    "pan": {
      "type": "String",
      "unique":true
    },
    "ownerName": {
      "type": "String"
    },
    "city": {
      "type": "String"
    },
    "pin": {
      "type": "String"
    },
    "mobile": {
      "type": "String"
    },
    "state": {
      "type": "String"
    },
    "stateCode": {
      "type": "Date"
    },
    "email": {
      "type": "String"
    },
    "country": {
      "type": "String"
    },
    "houseNo": {
      "type": "String"
    },
    "landMark": {
      "type": "String"
    },
    "area": {
      "type": "String"
    },
    "isActive":{
      "type":"Number"
    }
  },
 {timestamps:true});

 export const User  = mongoose.model("User", userSchema);