import mongoose from "mongoose";

const invoiceScheme = new mongoose.Schema(
    {
        "invoiceNo": {
          "type": "Number"
        },
        "invoiceDate": {
          "type": "Date"
        },
        "placeOfSupply": {
          "type": "String"
        },
        "reverseCharge": {
          "type": "String"
        },
        "totalTaxableValue": {
          "type": "Number"
        },
        "totalInvoiceValue": {
          "type": "Number"
        },
        "taxAmtsgstorcgst28": {
          "type": "Number"
        },
        "taxAmtsgstorcgst18": {
          "type": "Number"
        },
        "taxAmtsgstorcgst12": {
          "type": "Number"
        },
        "taxAmtsgstorcgst5": {
          "type": "Number"
        },
        "taxAmtIgst28": {
          "type": "Number"
        },
        "taxAmtIgst18": {
          "type": "Number"
        },
        "taxAmtIgst12": {
          "type": "Number"
        },
        "taxAmtIgst5": {
          "type": "Number"
        },
        "taxable28": {
          "type": "Number"
        },
        "taxable18": {
          "type": "Number"
        },
        "taxable12": {
          "type": "Number"
        },
        "taxable5": {
          "type": "Number"
        },
        "customer": {
          "customerAddress": {
            "type": "String"
          },
          "customerContact": {
            "type": "String"
          },
          "customerPan": {
            "type": "String"
          },
          "customerState": {
            "type": "String"
          },
          "customerName": {
            "type": "String"
          },
          "customerGst": {
            "type": "String"
          }
        },
        "products": {
          "type": [
            "Mixed"
          ]
        },
        "invoiceStatus": {
          "type": "String"
        },
        "invoiceType": {
          "type": "String"
        },
        "id": {
          "type": "Number"
        },
        "isActive": {
          "type": "Number"
        }
      }
)

export const Invoice = mongoose.model("Invoice", invoiceScheme);

// module.exports = Invoice;