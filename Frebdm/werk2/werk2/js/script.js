$('.slider').slick({
  dots: true,
  speed: 300,
  autoplay: true,
  autoplaySpeed: 4000,
  slidesToShow: 1,
  adaptiveHeight: true,
  arrows: false
});


$('.mobi-menu').on('click',function(){
	$('header nav').addClass('active');
	});

$('.cancel').on('click',function(){
	$('header nav').removeClass('active');
	});


$('.builder-bottom-img').ready(function() {
  $('.img').magnify();
});

$('.builder-bottom-img').ready(function() {
  $('.img').magnify({
    speed: 200,
    src: '../img/imac-big.png'
  });
});

 $(function() {
    $( "#tabs" ).tabs({
  active: 1
});
  })


 $('.color-item').on('click',function(){
  $('.color-item').removeClass('active');
  $(this).addClass('active');
  var color=$(this).attr('data-color');
  $('.ground').css('background',color);
 });


