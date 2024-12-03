const express = require("express");
const app = express();
app.use(express.json());


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

app.get('/number', function (req, res) { // for getting total number of kidneys for 

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

        // console.log(numberOfHelathyKidneys); // for debugging purpose
        let noOfUnhealthyKidneys = noOfKidneys - numberOfHelathyKidneys;
        res.status(200).json({
            message: ` totalKidneys : ${noOfKidneys},  Healthy : ${numberOfHelathyKidneys} , Unhealthy : ${noOfUnhealthyKidneys}`
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
            res.status(402).json({ msg: " Unknown Error ........" });
        }
    }

})


app.put('/update', (req, res) => {
    try {
        let n = req.query.n;
        if (!n || !users[n]) {
            res.status(500).json("User Id is Invalid")
        }

        for (let i = 0; i < users[n].kidneys.length; i++) {
            users[n].kidneys[i].healthy = true;
        }
        res.status(200).json("Done");
    }
    catch (err) {
        if (err) {
            console.log(err);
        }
    }

})

app.delete('/delete', (req, res) => {
    try {
        let n = req.query.n;
        if (!n || !users[n]) {
            res.status(500).json("User Id is Invalid")
        }

        let newKidneys = [];
        for (let index = 0; index < users[n].kidneys.length; index++) {
                if(users[n].kidneys[index].healthy) {
                        newKidneys.push({
                            healthy : "true"
                        })
                }                   
        }

        users[n].kidneys = newKidneys;
        res.json("msg : Done and dusted .........");

    } catch (error) {
        console.log(error);
    }
    })

const port = 5555;
app.listen(port, () => {
    console.log("Server started");
})
