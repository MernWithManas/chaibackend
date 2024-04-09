const express = require("express");
const app = express();
const port = 3000;
require("dotenv").config()




app.listen(port, () => {
    console.log(`Listening on port number: ${port}`);
})

app.get("/" , (req, res)=> {
    res.send("Welcome to the homepage !")
    console.log("requesting homepage");
})

app.get("/amazon", (req, res) => {
    res.send("<a>https://Amazon.com<a/>")
    console.log("resquesting amazon.com");
})