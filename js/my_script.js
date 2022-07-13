function noImage(imgage){
	imgage.onerror="";
	imgage.src="images/commont/noimage.png";
}

$(window).ready(function(){
	$('.my_tooltip').each(function(){
		var this_width=$(this).outerWidth();

		var this_margin=(-this_width/2)+($(this).parent().outerWidth()/2);
		$(this).css({'margin-left':this_margin});
	})

	$('.item_tooltip').hover(function(){
		$('.my_tooltip').fadeToggle();
	});
});