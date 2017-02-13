$('.mobi-menu').on('click', function(){
	$('header nav').addClass('active');
});

$('.icon-cancel').on('click', function(){
	$('header nav').removeClass('active');
});




$('.slider').slick({
	arrows: false,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1
});




$('.test').ready(function() {
  $('.zoom').magnify();
});

$('.test').ready(function() {
  $('.zoom').magnify({
    speed: 200,
    src: '../img/monitor_zoom.png'
  });
});





$('.tem-content').slick({
	autoplay: true,
    arrows: false,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1
});




$(function() {
    $( "#tabs" ).tabs({
    active: 1
  });
});




$('.color-item').on('click',function(){
  $('.color-item').removeClass('active');
  $(this).addClass('active');
  var color=$(this).attr('data-color');
  $('.icon-eye-outline').css('background',color);
  $('.icon-plus-circled').css('background',color);
 });