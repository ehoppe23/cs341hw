/* Emily Hoppe CS 341*/


var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    const order1 = {topping: "cherry", quantity: 1};
    const order2 = {topping: "plain", quantity: 2};
    const order3 = {topping: "cherry", quantity: 9};
    const order4 = {topping: "chocolate", quantity: 3};
    const arr = [order1, order2, order3, order4];
    res.json(arr);
});

module.exports = router;