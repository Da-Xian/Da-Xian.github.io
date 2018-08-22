$(window).load(function(){
    $('.preloader').delay(1000).fadeOut("slow");     
});
$(function(){
    jQuery(document).ready(function() {
		$('body').backstretch([
	 		 "img/cheng.jpeg", 
	 		 "images/kai.jpg",
			 "images/ge.jpg"
	 			], 	{duration: 3200, fade: 1300});
		});
})