const express=require("express")
const app=express();
const PORT=process.env.PORT||"6010"
app.get('/api/PrintDeed/:deedid/date/:year/:month/:day',(req,res)=>{
    const deedid=req.params["deedid"];
    const year=req.params["year"];
    const day=req.params["day"]
    const month=req.params["month"]

    console.log(deedid,year,month,day)

    res.send(`${req.url}/api/printdownload/1099993477`)
})
app.listen(PORT,()=>{
    console.log(`Listening port ${PORT}...`)
})
