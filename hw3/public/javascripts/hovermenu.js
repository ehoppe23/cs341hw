
function requestMonth(){
    $.post('/orders', function(data, status, json){
        
      }); 

    /* $.post({
        traditional: true,
        url: '/orders',
        contentType: 'appliction/json',
        data: JSON.stringify(orders),
        dataType: 'json',
        success: function(response){
            console.log('success');
            console.log(JSON.stringify(data));
        }
    }); */

    //sel.value
  /*   $.ajax({
        type: 'POST',
        data: data,
        contentType: 'application/json',
        url: 'http://localhost:3000/orders'						
        success: function(data) {
            console.log('success');
            console.log(JSON.stringify(data));
        }
    }); */
}