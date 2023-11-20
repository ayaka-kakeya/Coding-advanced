
const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    loopedSlides: 4,
	  
    slidesPerView: 1,

    breakpoints:{
      576:{
        slidesPerView: 2,
      }
    },
    
    autoplay:{
      delay: 0,
    },
    speed:2000,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev' },
      
      scrollbar: {
        el: ".swiper-scrollbar",
        hide: false,
        draggable: true 
        
    }
  
    
  });

$(function () {
    $('.ac-parent').on('click', function () {
    $(this).next().slideToggle();
});
});

$(function(){
	$(window).scroll(function (){
		$('.fadein').each(function(){
			var elemPos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > elemPos - windowHeight + 200){
				$(this).addClass('scrollin');
			}
		});
	});
});

$(function() {
  $('.Toggle').click(function() {
     $(this).toggleClass('active');
    $('.menu').toggleClass('open');
   });
  });