// const express = require("express");
// const app = express();
// const bodyParser = require("body-parser");


// app.use(bodyParser.json());
// app.post('/', function(req,res){
//         const message = req.body.message;
//         console.log(message);
//     res.send("Message is Passing  ");
// })

// app.listen(3000, ()=> console.log("Server is Started at localhost:3000/" ));



// function calculateTime() {
//     let t = new Date().getSeconds;

//     let a = 0;
//     let beforeLoopTime = t;
//     console.log(beforeLoopTime);
//     for (let index = 0; index < 1000000000; index++) {
//         a += index;
//     }
//     let afterLoopTime = t;
//     console.log(afterLoopTime);

//     let totalTimeTakenToRunLoop = afterLoopTime - beforeLoopTime;
//     console.log(totalTimeTakenToRunLoop);
// }

// calculateTime();

// let t = new Date();
// let p = t.getTime() / 1000;
// console.log(p);

// for(let  i = 0 ;i < 1000000000; i++){
//     let a = 0;
//    a = a+i;
// }
// let newTime = new Date();
//  let q  = newTime.getTime() / 1000;
//  console.log(q);

//  let totalTimeTaken = q - p;
//  console.log(totalTimeTaken);

// ## Create a counter in JavaScript

// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second
function counterWork(n){
    for(let i = 0; i <= n; i++){
    setTimeout(() => {
    console.log("Counter : " + i);    
    }, i * 1000);
    }
    }
    
    const port = 5555;

    const express = require("express");

    const app = express();
    app.use(express.json());
    function calculateSum(n){
        let ans = 0;
        for (let index = 0; index <= n; index++) {
            ans += 0;            
        }
        return ans;
    }

    app.get('/', (req,res)=>{
        let m = req.query.n;
        res.send(calculateSum(m));
    })

    app.listen(port , ()=>{
        console.log("Server started");
    })