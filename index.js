const express=require("express");
const app=express();
const dataRouter=require("./Routes/Data");
const cors=require("cors");

app.use(cors());
app.use("/api",dataRouter);
app.listen(process.env.PORT||8000,()=>{
    console.log("Testing");
});