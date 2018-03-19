$(document).ready(function(){
	$('a[href^="#"]').click(function(){
		elementClick = $(this).attr("href");
		destination = $(elementClick).offset().top;
		{
			$('body, html').animate( { scrollTop: destination}, 3000);
		
		}
		return false;
	});


	// modal login
var modal1 = document.getElementById('id01');

//When the user clicks anywhere outsideof the modal, close it
window.onclick = function(event) {
	if (event.target==modal1) {
		modal1.style.display = "none";
	}
}



	// Get the modal
var modal = document.getElementById('id02');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}// modal login




	var touch = $('#touch-menu');
	var menu = $('.menu');

	$(touch).on('click', function(e){
		e.preventDefault();
		menu.slideToggle();
	});
	$(window).resize(function(){
		var wid = $(window).width();
		if(wid > 768 && menu.is(':hidden')){
			menu.removeAttr('style');

		}
	});


$(".arrival_txt ,.brands_h2, .news_h2, .contact_h2").textillate({
		in:{
			effect:'rollIn',
			shuffle: true,
			
		}
	
	});

 $('.top_slider').slick({
 	autoplay: true,
 	dots: true,
 	arrows: false
 });

$('.brands_logo').slick({
 	autoplay: true,
 	slidesToShow: 5,
  	slidesToScroll: 1,
  	arrows: false,
  	lazyLoad: 'progressive',
  	responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        lazyLoad: 'progressive',
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerPadding: '5px',
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
 });


$('.mid_carousel').slick({
 	autoplay: true,
 	arrows: false,
 	slidesToShow: 1,
  slidesToScroll: 1,

 });


//OVERLAY1
$(".model1").click(function(){
  $(this).find(".overlay1").toggle();
});






});



	
	







