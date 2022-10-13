import express from 'express';
const app = express();
import userRoutes from './routes/user.js';
// <--  connection part start -->
import connectDB from './config/database.js';
connectDB();
// <-- connection part end -->

const PORT = process.env.PORT || 8000;


app.get("/",(req,res)=>{
    res.send("api is running...");
});


// routes

app.use("/api/v1",userRoutes);

app.listen(PORT, ()=>{
    console.log(`Api is running on http://localhost:${PORT}`);
})
