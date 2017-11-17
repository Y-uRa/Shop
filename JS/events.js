$('#mobile').click(function(){
    $('#catalog').html('');
    for(var i = 0; i < product.length; i++){
        console.log(i);
        if(product[i].catId == 1){
            $('<p></p>').appendTo("#catalog").text(product[i].name);   
        }    
    }
    
});

$('#laptop').click(function(){
    $('#catalog').html('');
    for(var i = 0; i < product.length; i++){
        console.log(i);
        if(product[i].catId == 2){
            $('<p></p>').appendTo("#catalog").text(product[i].name);   
        }    
    }
    
});

$('#pc').click(function(){
    $('#catalog').html('');
    for(var i = 0; i < product.length; i++){
        console.log(i);
        if(product[i].catId == 3){
            $('<p></p>').appendTo("#catalog").text(product[i].name);   
        }    
    }
    
});

$('#tv').click(function(){
    $('#catalog').html('');
    for(var i = 0; i < product.length; i++){
        console.log(i);
        if(product[i].catId == 4){
            $('<p></p>').appendTo("#catalog").text(product[i].name);   
        }    
    }
    
});

$('#camera').click(function(){
    $('#catalog').html('');
    for(var i = 0; i < product.length; i++){
        console.log(i);
        if(product[i].catId == 5){
            $('<p></p>').appendTo("#catalog").text(product[i].name);   
        }    
    }
    
});