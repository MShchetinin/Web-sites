$('.color-item').on('click', function(){
    $('.color-item').removeClass('active');
	$('.color-item').addClass('active');
	$(this).attr('data','color');
	var color=$(this).attr('data','color');
	$('_______').css('background','color')
});
