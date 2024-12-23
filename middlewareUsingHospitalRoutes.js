const express = require("express");
const app = express();
app.use(express.json());


app.get("/health-checkup" , (req,res) => {
 if(req.headers.id  != "Shubham" || req.headers.pass !== "pass"){
    res.status(500).json({msg : "incorrect is pass"})
 }
 if(req.query.kidId != 2 ){
    res.status(500).json({msg : "something is ur up with kidney"});
}
 res.status(200).json({msg : "your are healthy....."})
})

app.get("/kidney-check" , (req,res) => {

    if(req.query.kidId != 2 ){
        res.status(500).json({msg : "something is ur up with kidney"});
    }

    res.status(200).json({msg : "All good"});
})

app.listen(3000, ()=> {
   console.log("Server is started at port 3000");
})