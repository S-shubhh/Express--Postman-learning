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
function counterWork(n) {
    for (let i = 0; i <= n; i++) {
        setTimeout(() => {
            console.log("Counter : " + i);
        }, i * 1000);
    }
}


const express = require("express");
const app = express();
app.use(express.json());

function calculateSum(n) {
    let ans = 0;
    for (let index = 0; index <= n; index++) {
        ans += index;
    }
    return ans;

}

app.get('/sum', (req, res) => {
    let m = req.query.n;
    let ans = calculateSum(m);
    res.status(200).send(ans.toLocaleString());
})



let users = [{
    firstName: 'Shubham',
    kidneys: [{
        healthy: true
    },
    {
        healthy: false,
    }],
},
{
    firstName: 'Shyam',
    kidneys: [{
        healthy: true,

    },
    {
        healthy: false,
    }]
},
{
    firstName: 'Manprit',
    kidneys: [{
        healthy: true,
    },
    {
        healthy: true,
    }]
}]

app.get('/number', function (req, res) {

    try {
        let n = parseInt(req.query.n);
        if (!n || !users[n]) {
            res.status(500).json("User dosen't exist or invalid id  ");
        }
        let noOfKidneys = users[n].kidneys.length;
        let numberOfHelathyKidneys = 0;
        for (let i = 0; i < noOfKidneys; i++) {
            if (users[n].kidneys[i].healthy === true) {
                numberOfHelathyKidneys++;
            }
        }

        console.log(numberOfHelathyKidneys); // for debugging purpose
        let noOfUnhealthyKidneys = noOfKidneys - numberOfHelathyKidneys;
        res.status(200).json({
            message: ` totalKidneys : ${noOfKidneys},  Helathy : ${numberOfHelathyKidneys} , Unhealthy : ${noOfUnhealthyKidneys}`
        })
    }

    catch (err) {
        if (err) {
            if (err.code === 'ENOENT') {
                console.log("Invalid userid");
            }
            console.log(err);
        }
        else {
            res.status(200).json('There are ' + noOfKidneys + "kidneys");
        }
    }
})

app.post('/add', (req, res) => {  // For adding kidneys , eithier healthy or unhealthy depending on body

    try {

        let n = req.query.n;
        if (!n || !users[n]) {
            res.status(500).json("User Id is Invalid")
        }


        let kidneysData = req.body;
        if (typeof kidneysData.healthy === 'string') {
            kidneysData.healthy = kidneysData.healthy.toLowerCase() === "true";
        }


        if (typeof kidneysData.healthy !== 'boolean') {
            res.status(500).json("Invalid kidney data format. 'healthy' must be true or false.");
        }

        users[n].kidneys.push(kidneysData);
        res.status(200).json({ msg: "Succesfully Added" });
    }
    catch (err) {
        if (err) {
            res.status(504).json({ msg: " Unknown Error ........" });
        }
    }

})


// app.put('/put', (req, res) => {
// //     let n = req.query.n;

// //     for (let i = 0; i <= users[n].kidneys.length; i++)
// //         if (users[n].kidneys[i] === false) {
// //             users[n].kidneys[i] = true;
// //         }

// //     res.status(200).json({ msg: "kidneys are updated as healthy " });
// // })




const port = 5555;
app.listen(port, () => {
    console.log("Server started");
})