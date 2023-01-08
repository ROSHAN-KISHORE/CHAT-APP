const express = require("express");
const dotenv=require("dotenv")
const chats=require("./data/data");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");

dotenv.config();
connectDB();
const app=express();

app.use(express.json()); // takes input from frontend as json

app.get('/', (req,res) => {
    res.send("API is running successfully");
});

app.use('/api/user',userRoutes);

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(5000, console.log('Server Running on PORT ${PORT}'));