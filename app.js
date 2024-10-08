import axios from "axios";
import bodyParser from "body-parser";
import express from "express";
import dotenv from "dotenv";


const app = express();
const port = 3000;
app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended:true}));

dotenv.config();

const api_url = process.env.API_URL;
const api_key = process.env.API_KEY;
const host = process.env.API_HOST;


app.post("/search",async (req,res)=>{
    let query = req.body.query;
    try{
        const response = await axios.get(`https://free-images-api.p.rapidapi.com/v2/${query}/1`,{
            headers:{
                'x-rapidapi-key': api_key,
                'x-rapidapi-host': host
            }
        });
        res.render("index.ejs",{data: response.data});
    }catch(error){
        console.log(error.message)
    }
});

app.get("/",async (req,res)=>{
    try{
        const response = await axios.get(api_url,{
            headers:{
                'x-rapidapi-key': api_key,
                'x-rapidapi-host': host
            }
        });
        res.render("index.ejs",{data: response.data});
    }catch(error){
        console.log(error.message)
    }
});

app.listen(port,()=>{
    console.log(`Listening on ${port}....`);
});