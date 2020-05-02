const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello from Digital Ocean")
})

app.listen(5000, () => console.log("Server started..."));