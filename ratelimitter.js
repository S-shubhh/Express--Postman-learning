const express = require('express');
const app = express();
// You have been given an express server which has a few endpoints.
// Your task is to create a global middleware (app.use) which will
// rate limit the requests from a user to only 5 request per second
// If a user sends more than 5 requests in a single second, the server
// should block them with a 404.
// User will be sending in their user id in the header as 'user-id'
// You have been given a numberOfRequestsForUser object to start off with which
// clears every one second

let numberOfRequestsForUser = {};
setInterval(() => {
    numberOfRequestsForUser = {};
}, 5000)

app.use((req,res ,next)=> {
    console.log(req.headers);
    const userId = req.headers['user-id'];
    console.log(userId);

    // If no user ID is provided, block the request
    if (!userId) {
        return res.status(404).send('User ID is required');
    }

    // Initialize or increment the request count for the user
    numberOfRequestsForUser[userId] = (numberOfRequestsForUser[userId] || 0) + 1;

    // If the user exceeds the rate limit, block them
    if (numberOfRequestsForUser[userId] > 5) {
        return res.status(404).send('Too many requests');
    }

    next();
})
app.get('/user', function(req, res) {
  res.status(200).json({ name: 'john' });
});

app.post('/user', function(req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});

app.listen(5000, ()=> {
    console.log("Server connected .....");
})