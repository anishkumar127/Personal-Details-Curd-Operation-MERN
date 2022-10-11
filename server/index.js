import express from 'express';
const app = express();

// <--  connection part start -->
import connectDB from './config/database.js';
connectDB();
// <-- connection part end -->

const PORT = process.env.PORT || 8000;


app.get("/",(req,res)=>{
    res.send("api is running...");
});

app.listen(PORT, ()=>{
    console.log(`Api is running on http://localhost:${PORT}`);
})
