const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors);

app.get("/", (req, res) => {
    res.send("Hello from Digital Ocean")
})

app.listen(5000, () => console.log("Server started..."));