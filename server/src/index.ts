
import express,{Application,Request, Response } from "express";
import "dotenv/config"

const app:Application = express();
const Port = process.env.Port || 4000


app.get("/", (req:Request, res:Response)=> {
    res.json(`server successfully start at Port no : ${Port}`)
})

app.listen(Port, ()=> {
    console.log(`server start at port no: ${Port}`);
    
})
 
