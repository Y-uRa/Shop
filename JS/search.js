$("#searchForm").on("input",function(){
        console.clear();
        $('#catalog').html('');
    	let value = $(this).val();
    	for(var i = 0; i < product.length; i++){
    		if(product[i].name.indexOf(value) > -1 && value != ''){
    			$('<p></p>').appendTo("#catalog").text(product[i].name);
    		}
    	};

    });