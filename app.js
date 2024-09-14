import express from "express";
import invoicesRouter from "./src/routes/invoice.route.js";
import paymentsRouter from "./src/routes/payment.route.js";
import productsRouter from "./src/routes/product.route.js";
import customerRouter from "./src/routes/customer.route.js";
import userRouter from "./src/routes/user.route.js";
import sellerRouter from "./src/routes/seller.route.js";
import loginRouter from "./src/routes/login.route.js"
import cors from 'cors';
import { auth } from "./src/middlewares/auth.middleware.js";

const app = express();

app.use(express.json())
app.use(cors())
app.use('/api/v1/invoices', auth,  invoicesRouter);

app.use('/api/v1/payments', paymentsRouter);

app.use('/api/v1/products', productsRouter);

app.use('/api/v1/customers', customerRouter);

app.use('/api/v1/users', userRouter);
app.use('/api/v1/sellers', sellerRouter);
app.use('/api/v1/authenticate', loginRouter);


export { app }