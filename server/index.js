import express from 'express';
const app = express();
import userRoutes from './routes/user.js';
import cors from 'cors';
import {PORT,mongoURI} from './config/index.js';
// <--  connection part start -->
import connectDB from './config/database.js';
connectDB();
// <-- connection part end -->

// const PORT = process.env.PORT;

// apply middleware of interact with json.
app.use(express.json());

// cors policy
app.use(cors());

app.get("/",(req,res)=>{
    res.send("api is running...");
});


// routes

app.use("/api/v1",userRoutes);

app.listen(PORT, ()=>{
    console.log(`Api is running on http://localhost:${PORT}`);
})
