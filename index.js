const express = require("express");
const app = express();

const port = process.env.NODE_PORT || 3000;

app.use(require("cors")());


app.get("/world", (req, res) => {
    res.send("world, hello!");
})

app.get("/hello", (req, res) => {
    res.send("hello world!");
});

app.listen(port, () => {
    console.log(`App listened to port ${port}`);
})
