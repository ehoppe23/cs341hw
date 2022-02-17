/* Emily Hoppe CS 341*/
var express = require('express');
var router = express.Router();
var myDBMS = require('./dbms_promise.js');

/* const arr = 
    {"data": [
        {"che" : {topping: "cherry", quantity: 1}},
        {"cho" : {topping: "chocolate", quantity: 3}},
        {"pl" : {topping: "plain", quantity: 2}}
    ]};
 */


router.get('/', function(req, res, next) {
    res.json(arr);
});


/* var baseOrder = 
{
        "che" : {TOPPING:"cherry", QUANTITY:0},
        "cho" : {TOPPING:"plain", QUANTITY:0},
        "pl" : {TOPPING:"chocolate", QUANTITY:0}
};

function getCherry(results) {
    if(results == null) results = 0;
    baseOrder.che.QUANTITY = results;
    console.log(baseOrder.data);
    arr.data[0].che.quantity = baseOrder.che.QUANTITY;
}

function getPlain(results) {
    if(results == null) results = 0;
    baseOrder.pl.QUANTITY = results;
    console.log(baseOrder.data);
   // arr.data[1].pl.quantity = baseOrder.pl.QUANTITY;
} */

/* function getChocolate(results) {
    if(results == null)results = 0;
    baseOrder.cho.QUANTITY = results;
    console.log(baseOrder.data); */
    //arr.data[2].cho.quantity = baseOrder.cho.QUANTITY;
/* } */
router.post('/',function(req, res, next){
    /* var que = "SELECT SUM(QUANTITY) AS count FROM ORDERS WHERE MONTH='" + req.body.month + "' AND TOPPING='cherry';";
    console.log(que); //Is working inside GCloud Shell
    myDBMS.dbquery("SELECT SUM(QUANTITY) AS count FROM ORDERS WHERE MONTH='" + req.body.month + "' AND TOPPING='cherry';", function(error, results) {
        getCherry(results);
        console.log("Results.count:"+ results.count);  
        myDBMS.dbquery("SELECT SUM(QUANTITY) AS count FROM ORDERS WHERE MONTH='" + req.body.month + "' AND TOPPING='plain';", function(error, results) {
            getPlain(results);
            console.log("Results:"+results);
            myDBMS.dbquery("SELECT SUM(QUANTITY) AS count FROM ORDERS WHERE MONTH='" + req.body.month + "' AND TOPPING='chocolate';", function(error, results) {
                getChocolate(results);
                console.log(results);
                res.send(arr);
            }); 
        });
        
    }); */
    
    //dbms.dbquery("SELECT SUM(QUANTITY)", function(error, results) {
      //  getChocolate(error,results);
      //  res.json(arr);
    //});

    var month = req.body.month;
    console.log("Month is now: " + month);

    /* var cheQuery = "SELECT SUM(QUANTITY) AS count FROM ORDERS WHERE MONTH='" + month + "' AND TOPPING='cherry';";
    var choQuery = "SELECT SUM(QUANTITY) AS count FROM ORDERS WHERE MONTH='" + month + "' AND TOPPING='chocolate';";
    var plQuery = "SELECT SUM(QUANTITY) AS count FROM ORDERS WHERE MONTH='" + month + "' AND TOPPING='plain';";

    var cheData = myDBMS.dbquery(cheQuery);
    var choData = myDBMS.dbquery(choQuery);
    var plData = myDBMS.dbquery(plQuery); */
    var fullquery = "SELECT SUM(QUANTITY) FROM ORDERS " +
                "WHERE MONTH='" + month + "' AND TOPPING='cherry'" +
                " UNION " +
                "SELECT SUM(QUANTITY) FROM ORDERS " +
                "WHERE MONTH='" + month + "' AND TOPPING='chocolate'" +
                " UNION " +
                "SELECT SUM(QUANTITY) FROM ORDERS " + 
                "WHERE MONTH='" + month + "' AND TOPPING='plain'";

    var data = myDBMS.dbquery(fullquery);
    data.then(function(results){
        console.log("results:" + JSON.stringify(results));
        var cherryData = (results[0]["SUM(QUANTITY)"] == null) ? 0 : results[0]["SUM(QUANTITY)"];
        var chocolateData = (results.length < 2 || results[1]["SUM(QUANTITY)"] == null) ? 0 : results[1]["SUM(QUANTITY)"];
        var plainData = (results.length < 3 || results[2]["SUM(QUANTITY)"] == null) ? 0 : results[2]["SUM(QUANTITY)"];
        console.log(JSON.stringify(cherryData));
        console.log(JSON.stringify(chocolateData));
        console.log(JSON.stringify(plainData));
        res.json({"data": [
            {"che" : {topping: "cherry", quantity: cherryData}},
            {"cho" : {topping: "chocolate", quantity: chocolateData}},
            {"pl" : {topping: "plain", quantity: plainData}}
        ]});
    });
});
  

module.exports = router;