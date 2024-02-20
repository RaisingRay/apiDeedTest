const express=require("express")
const app=express();
const PORT=process.env.PORT||"6010"
const path=require("path");
const cors=require('cors');
const fs=require("fs");
app.use(cors());

app.get('/api/PrintDeed/:deedid/date/:year/:month/:day',(req,res)=>{
    console.log("inside")
    const deedid=req.params["deedid"];
    const year=req.params["year"];
    const day=req.params["day"]
    const month=req.params["month"]
    console.log(deedid,year,month,day)
    res.send(`${req.get('host')}/api/DeedDownload/1999403`);
})

app.get('/api/DeedDownload/1999403',(req,res)=>{
  const img=fs.readFileSync("./deed.png");
  res.send(Buffer.from(img).toString('base64'))
})
app.get('/log',async (req,res)=>{
    console.log('inide')
    res.send('logging...')
})
app.get("/",(req,res)=>{
    res.send("listening ....");
})
app.listen(PORT,()=>{
    console.log(`Listening port ${PORT}...`)
})
