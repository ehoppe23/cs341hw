var express = require('express');
var router = express.Router();
var dbms = require('./dbms.js');

router.post('/', function(req, res) {
   var id = Math.floor(Math.random() * Math.floor(100));
   var month = 'Feb';
   var day = 12;
   var quantity = req.body.quantity;
   var topping = req.body.topping;
   var notes = req.body.notes;

   if(notes == null) {
        notes = " ";
   }

   dbms.dbquery("INSERT INTO ORDERS VALUES ('" + id + "','" + month + "','" + day + "','" + quantity + "','" + topping + "','" + notes + "');", callBack);
   function callBack(error, result) {
       return;
   }
});