import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
    "gst": {
      "type": "String"
    },
    "customerName": {
      "type": "String"
    },
    "dateofReceipt": {
      "type": "Date"
    },
    "amountReceived": {
      "type": "String"
    },
    "modeofPayment": {
      "type": "String"
    },
    "paymentDetails": {
      "type": "String"
    },
    "id": {
      "type": "Number"
    },
    "isActive": {
      "type": "Number"
    }
  });

 export const Payment = mongoose.model("Payment", paymentSchema);