const express = require('express')
const router = express.Router();
const ProductPriceInformation  = require("../models/produktpriceinformation.model");

router.get("/productprices/:id", (req, res) => {
    console.log("Starting /productprices/");
    const {id} = req.params;
    console.log("With ID " + id);
    ProductPriceInformation.findById(id, (err, ppi) => {
        if (err) {
            console.log("Error")
            console.log("DB error; " + err);
            res.send("Technical Error");
        } else {
            console.log("Success")
            res.send({"Price": ppi, "ID": 12});
        }
    });
});

module.exports = router;