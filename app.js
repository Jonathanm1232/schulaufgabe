const express = require("express");
const app = express();
const EXP_PORT = 3000;
const apiRouter = require("./router/api.js");


app.use("/api", apiRouter)

app.listen(EXP_PORT, () => {
    console.log("Accepting Requests at: http://localhost:" + EXP_PORT);
})