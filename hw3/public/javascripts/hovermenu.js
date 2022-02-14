/*Emily Hoppe CS341*/
/* function requestMonth(){
    $.post('/orders', function(arr, status, json){
        
        $("#orderChe").text(arr.data[0].che.quantity +  " cherry");
        $("#orderCho").text(arr.data[1].cho.quantity +  " chocolate");
        $("#orderPl").text(arr.data[2].pl.quantity +  " plain");

    });  

   
} */
function requestMonth(){
    var value = $(this).value;
    $.post('/orders', {month: value},function(arr){
    $("#orderChe").text(arr.data[0].che.quantity +  " cherry");
    $("#orderCho").text(arr.data[1].cho.quantity +  " chocolate");
    $("#orderPl").text(arr.data[2].pl.quantity +  " plain");
    });  

}