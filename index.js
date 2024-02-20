const express=require("express")
const app=express();
const PORT=process.env.PORT||"6010"
app.get('/api/PrintDeed/:deedid/date/:year/:month/:day',(req,res)=>{
    const deedid=req.params["deedid"];
    const year=req.params["year"];
    const day=req.params["day"]
    const month=req.params["month"]
    console.log(deedid,year,month,day)
    res.send(`${req.get('host')}/api/DeedDownload/1999403`);
})

app.get("/",(req,res)=>{
    res.send("listening ....");
})
app.listen(PORT,()=>{
    console.log(`Listening port ${PORT}...`)
})
