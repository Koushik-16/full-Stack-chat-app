import express from "express";
import dotenv from "dotenv";
import cookieParser from 'cookie-parser';
import authRoutes from "./routes/auth.routes.js"
import connectToMongoDB from "./db/connectToMongoDB.js";
import messageRoutes from './routes/message.routes.js'
import userRoutes from './routes/user.routes.js'
import {app , server} from './socket/socket.js'
import cors from 'cors';


const PORT = process.env.PORT || 5000;

dotenv.config();
app.use(cors({ origin: 'http://localhost:3000' , 
    methods : ["GET" , "POST"],
    credentials : true,
 }));
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth" , authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users" , userRoutes);

server.listen(PORT , () => {
    connectToMongoDB();
    console.log(`server is running on port ${PORT}`);
})