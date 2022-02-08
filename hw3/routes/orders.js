/* Emily Hoppe CS 341*/
var express = require('express');
var router = express.Router();
const arr = 
    {"data": [
        {"che" : {topping: "cherry", quantity: 1}},
        {"cho" : {topping: "chocolate", quantity: 3}},
        {"pl" : {topping: "plain", quantity: 2}}
    ]};


//var app = express();

router.get('/', function(req, res, next) {
    res.json(arr);
});


router.post('/', function(req, res){
    res.json(arr);
});
  

module.exports = router;