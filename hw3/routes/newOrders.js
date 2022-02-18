/* Emily Hoppe CS341 */
var express = require('express');
var router = express.Router();
var dbms = require('./dbms_promise');

router.post('/', function(req, res, next) {
    
    var newOrder = dbms.dbquery("SELECT COUNT(ORDERID) AS NEXTID FROM ORDERS");
    
    newOrder.then(function(results) { //get appropriate ID
        return results[0].NEXTID;
    })

    .then(function(id) {//insert data
        var monthEnum = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
       
        var randomday = Math.floor(Math.random() * 31);
        var month = monthEnum[Math.floor(Math.random() * 12)];
        month = month.toUpperCase();

        if (month == 'feb' && randomday > 29) randomday -= Math.floor(Math.random() * 29) + 1;
        
        var insert_query = "INSERT INTO ORDERS " +
        "VALUES ( " + id + ", '" + month + "', " + randomday + ", " + 
        req.body.quantity + ", '" + req.body.topping.toLowerCase() +
         "', '" + req.body.notes  + "')";

        dbms.dbquery(insert_query);
        
        return id;
    })
    
    //did insert work
    .then(function(id) {
        var workingSQL = "SELECT * FROM ORDERS WHERE ORDERID > "
         + id + " - 2";
        var working = dbms.dbquery(workingSQL);
        working.then(function(results) {
            console.log("New Order Results: " + JSON.stringify(results));
        })
    });
});

module.exports = router;