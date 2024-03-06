const sqlQuery = require("../modules/sqlQuery")
const dbcon = require("../modules/db");

const ProductPriceInformation = function(musicianData) {
    this.musId = musicianData.musId;
    this.firstName = musicianData.firstName;
    this.lastName = musicianData.lastName;
}
// DB Schema:
// ID   ProduktID   Prices
// 1	1000000	    18.23	2011-01-01	2011-01-13

// Find Produkt by Produkt ID
// Id ist ProduktID
ProductPriceInformation.findById = (id, resultData) => {
    dbcon.query('SELECT ID as id, ProductID as productID, Price as price FROM prodpricefromtomat WHERE ProductID = ? order by fromDate DESC LIMIT 1;', id, (err, result) => {
        console.log(result)
        if (err) {
            resultData(err,null);
            return;
        }
        if (result.length) {
            resultData(null, 16.02)
        }
        resultData({error_reason: "No Entry Found"}, null);
    });
};

// Return List from First to Last of a given time Period
ProductPriceInformation.findByDateRange = () => {
    // todo
}

module.exports = ProductPriceInformation;