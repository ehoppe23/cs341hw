//Emily Hoppe CS 341



eventHandler = function( event ) {
    testVegan();
}

$(function() {
    $('#uinput').on('input', eventHandler);
});

const order = {quantity:3, topping:"Plain"};
const entered = {text:"100", vegan:"no"};
function ordered(){
    if(entered.vegan == "no"){ //manages response if "vegan" has been seen or not
	document.getElementById('form').style.display ='none';
	document.getElementById("formSubmitted").innerHTML = "Thank you! Your order has been placed.";
	document.getElementById("formItems").innerHTML = "Quantity: " + order.quantity + "	Topping: " + order.topping;
    document.getElementById("formNotes").innerHTML = "Extra Notes: " + $('textarea#uinput').val();
        
    var top = order.topping;
    var num = order.quantity;
    var note = $('textarea#uinput').val();

    $.post("/neworders", {
        quantity: num,
        topping: top,
        notes: note, 
    });

    } else {
	alert('Cheesecake contains dairy!');
    }
}


function testVegan(){ //tests if "vegan" has been seen in textarea
    var comment =  $('textarea#uinput').val();
    comment = comment.toLowerCase(); //not tested
    if(comment.includes("vegan")){
    entered.vegan="yes";
    } else {
    entered.vegan="no";
    }
}

function JSDropDown() {
            var x = document.getElementById("mydropdown").options.length;
            document.getElementById("mydropdown").size = x/2;
        }