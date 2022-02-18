/* Emily Hoppe CS 341*/
var express = require('express');
var router = express.Router();
var myDBMS = require('./dbms_promise.js');


router.get('/', function(req, res, next) {
    res.json(arr);
});


router.post('/',function(req, res, next){
    

    var month = req.body.month;
    console.log("Month is now: " + month);

  
    var fullquery = "SELECT SUM(QUANTITY) FROM ORDERS " +
                "WHERE MONTH='" + month + "' AND TOPPING='cherry'" +
                " UNION " +
                "SELECT SUM(QUANTITY) FROM ORDERS " +
                "WHERE MONTH='" + month + "' AND TOPPING='chocolate'" +
                " UNION " +
                "SELECT SUM(QUANTITY) FROM ORDERS " + 
                "WHERE MONTH='" + month + "' AND TOPPING='plain'";

    var mydata = myDBMS.dbquery(fullquery);
    mydata.then(function(results){
        console.log("Retrieve Results:" + JSON.stringify(results));
        var cherryData = (results[0]["SUM(QUANTITY)"] == null) ? 0 : results[0]["SUM(QUANTITY)"];
        var chocolateData = (results.length < 2 || results[1]["SUM(QUANTITY)"] == null) ? 0 : results[1]["SUM(QUANTITY)"];
        var plainData = (results.length < 3 || results[2]["SUM(QUANTITY)"] == null) ? 0 : results[2]["SUM(QUANTITY)"];
        //console.log(JSON.stringify(cherryData));
        //console.log(JSON.stringify(chocolateData));
        //console.log(JSON.stringify(plainData));
        res.json({"data": [
            {"che" : {topping: "cherry", quantity: cherryData}},
            {"cho" : {topping: "chocolate", quantity: chocolateData}},
            {"pl" : {topping: "plain", quantity: plainData}}
        ]});
    });
});
  

module.exports = router;