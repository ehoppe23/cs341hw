/* Emily Hoppe CS 341*/
var express = require('express');
var router = express.Router();
const arr = 
    {"data": [
        {"che" : {topping: "cherry", quantity: 1}},
        {"cho" : {topping: "chocolate", quantity: 3}},
        {"pl" : {topping: "plain", quantity: 2}}
    ]};



router.get('/', function(req, res, next) {
    res.json(arr);
});


var baseOrder = 
{
    error:null,
    data : [
        {"che" : {TOPPING:"cherry", QUANTITY:0}},
        {"cho" : {TOPPING:"plain", QUANTITY:0}},
        {"pl" : {TOPPING:"chocolate", QUANTITY:0}},
]};

function getCherry(error, results) {
    baseOrder.data = results;
    baseOrder.error = error;
    console.log(baseOrder.data);
    arr.data[0].che.quantity = baseOrder.data[0].quantity;
}

function getPlain(error, results) {
    baseOrder.data = results;
    baseOrder.error = error;
    console.log(baseOrder.data);
    arr.data[1].pl.quantity = baseOrder.data[0].quantity;
}

function getChocolate(error, results) {
    baseOrder.data = results;
    baseOrder.error = error;
    console.log(baseOrder.data);
    arr.data[2].cho.quantity = baseOrder.data[0].quantity;
}
router.post('/', function(req, res){
    dbms.dbquery("SELECT SUM(QUANTITY) AS count FROM ORDERS WHERE MONTH='" + req.body.month + "' AND TOPPING='cherry';", function(error, results) {
        getCherry(error, results);  
        dbms.dbquery("SELECT SUM(QUANTITY) AS count FROM ORDERS WHERE MONTH='" + req.body.month + "' AND TOPPING='plain';", function(error, results) {
            getPlain(error, results);
            dbms.dbquery("SELECT SUM(QUANTITY) AS count FROM ORDERS WHERE MONTH='" + req.body.month + "' AND TOPPING='chocolate';", function(error, results) {
                getChocolate(error, results);
                res.json(arr);
            }); 
        });
        
    });
    
    //res.json(arr);
});
  

module.exports = router;