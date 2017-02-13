
/*Это скрипт с меню для телефонов*/
/*
$('.mobi-menu').click(function(){
	$('.top-nav ul').slideToggle("500" , function(){
    });
});
*/

/*
//Скрипт для анимации при скроле
$(window).scroll(function(){
	$('.heading').animateOnScroll({
		scrollDownEffect: 'fadeInUp up-a'
	});
});
$(window).scroll(function(){
	$('.float-left').animateOnScroll({
		scrollDownEffect: 'fadeInUp left-a'
	});
});
*/







//скрипт для фиксации меню
$(document).ready(function() {
	var navoffeset=$("nav").offset().top;
	$(window).scroll(function(){
	 	var scrollpos=$(window).scrollTop(); 
	 	if(scrollpos >=navoffeset){
	 		$("nav").addClass("fixed");
	 	}else{
	 		$("nav").removeClass("fixed");
	 	}
	});
});
/*
$(document).ready(function(){
	$("nav ul li a").click(function(){
		$(this).parent().addClass("active");
		$(this).parent().siblings().removeClass("active");
	});
});
*/

// menu toggle
	$('#menu_toggle').on('click', function(){
		$(this).toggleClass('is-active');
		$('ul').slideToggle();
	});



// Плавный scroll вниз
$(document).ready(function(){
    $("#scroll").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });
});




//Скрипт для ссылки поднятия вверх страницы
(function() {
	$(window).scroll(function() {
		if ($(this).scrollTop() != 0) {
			$('#to_top').fadeIn();
		} else {
			$('#to_top').fadeOut();
		}
	});
	$('#to_top').on("click", function() {
		$('body,html').animate({scrollTop:0},800);
	});
}());




/*Это скрипт для слайдера*/

$('.slider').slick({
	autoplay: true,
	arrows: true,
    dots: false,
	autoplaySpeed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
	 responsive: [
        {
            breakpoint: 680,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 1024,
            settings: {
		        infinite: true,
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }
     ]
});

$('.fusc-slider').slick({
	autoplay: true,
	arrows: false,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1
});




/*Это скрипт для зума изображений (лупа)

$('.test').ready(function() {
  $('.zoom').magnify();
});

$('.test').ready(function() {
  $('.zoom').magnify({
    speed: 200,
    src: '../img/monitor_zoom.png'
  });
});
*/







/*Это скрипт для табов*/

$(function() {
    $( "#tabs" ).tabs({
    active: 0
  });
});



$(document).ready(function() {

    $('.mh').matchHeight();
});



/*Это скрипт для замены цвета  ховера на изображении 

$('.color-item').on('click',function(){
  $('.color-item').removeClass('active');
  $(this).addClass('active');
  var color=$(this).attr('data-color');
  $('.icon-eye-outline').css('background',color);
  $('.icon-plus-circled').css('background',color);
});
*/


$(document).ready(function() {
 $('.hover-div').magnificPopup({
   delegate: 'a',
   type: 'image',
   tLoading: 'Loading image #%curr%...',
   mainClass: 'mfp-img-mobile',
   gallery: {
   enabled: true,
   navigateByImgClick: true,
   preload: [0,1] // Will preload 0 - before current, and 1 after the current image
   },
   image: {
   tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
   titleSrc: function(item) {
    return item.el.attr('title') + '<small>by Maksim Shchetinin</small>';
    }
   }
 });
});