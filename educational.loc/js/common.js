$(document).ready(function() {
	
	/*Скрипт для всплывающих окон*/
	$('.popup').magnificPopup({
		type:'image'
	});
	
	$('.popup_c').magnificPopup({
		
	});
	
	/*Скрипт для блоков с фоновыми изображениями*/
	$.stellar({
		responsive: true,
		horizontalOffset: 0
	});
	
	/*Скрипт для слайдера*/
	$(".owl-carousel").owlCarousel({
		loop: true,
		responsive : {
			0 : {
				items : 1,
				nav : true
			}
		}
	});
	

	function wResize(){
		$("header").css("min-height", $(window).height());
	};
	wResize();
	$(window).resize(function(){
			wResize()
	});
	
	/*Скрипт для табов*/
	$(".top_phone .tab_item").not(":first").hide();
	$(".top_phone .wrapper .tab").click(function() {
		$(".top_phone .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".top_phone .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");
	
	$(".bottom_phone .tab_item").not(":first").hide();
	$(".bottom_phone .wrapper .tab").click(function() {
		$(".bottom_phone .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".bottom_phone .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");
	
	$(".tabs_header .tab_item").not(":first").hide();
	$(".tabs_header .wrapper .tab").click(function() {
		$(".tabs_header .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".tabs_header .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");
	
	$(".s_contacts .tab_item").not(":first").hide();
	$(".contacts_top .tab").click(function() {
		$(".contacts_top .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".s_contacts .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("form").submit(function(e) {
		var th = $(this);
		e.preventDefault;
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: th.serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				var magnificPopup = $.magnificPopup.instance; 
				magnificPopup.close(); 
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});
	
});


$(window).load(function() {

	/*Анимация*/
	$(".top_header h1").animated("fadeInDown", "fadeOut");
	$(".top_header p").animated("fadeInUp", "fadeOut");
	$(".tabs_header .wrapper").animated("flipInY", "flipInY");
	$(".logo").animated("bounce", "bounce");
	$(".top_phone .wrapper").animated("bounceInRight", "bounceInRight");
	$(".s_tizers i").animated("flipInX", "fadeOut");
	$(".s_profi h2").animated("slideInUp", "slideOutDown");
	$(".profi_item").animated("fadeInLeft", "fadeOutLeft");
	$(".s_profi form").animated("fadeInRight", "fadeOutRight");
	$(".owl-prev").animated("rollIn", "rollOut");
	$(".owl-next").animated("rollIn", "rollOut");
	$(".image_wrap").animated("zoomIn", "zoomOut");
	$(".s_review h2").animated("shake", "fadeOut");
	$(".s_back h3").animated("fadeInUp", "fadeOut");
	$("footer").animated("bounceInUp", "fadeOut");
});