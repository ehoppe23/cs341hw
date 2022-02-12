/*Emily Hoppe CS341*/
/* function requestMonth(){
    $.post('/orders', function(arr, status, json){
        
        $("#orderChe").text(arr.data[0].che.quantity +  " cherry");
        $("#orderCho").text(arr.data[1].cho.quantity +  " chocolate");
        $("#orderPl").text(arr.data[2].pl.quantity +  " plain");

    });  

   
} */
monthHandler = function(){
    //$.post('/orders', function(arr, status, json){
    var value = $(this).value;
    //$("#monthMenu").html(value);
    $.post('/orders',{month: value
    },
    function(arr){
    /* var newOrder1 = arr.data[0].che.quantity +  " cherry";
    var newOrder2 = arr.data[1].cho.quantity +  " chocolate";
    var newOrder3 = arr.data[2].pl.quantity +  " plain";
    $("#orderChe").html(newOrder1);
    $("#orderCho").html(newOrder2);
    $("#orderPl").html(newOrder3); */
    $("#orderChe").text(arr.data[0].che.quantity +  " cherry");
    $("#orderCho").text(arr.data[1].cho.quantity +  " chocolate");
    $("#orderPl").text(arr.data[2].pl.quantity +  " plain");

    });  

}