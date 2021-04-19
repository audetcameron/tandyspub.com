import './bootstrap.min.js';
import './fancybox/jquery.fancybox.js';

;(function(){

			// Menu settings
			$('#menuToggle, .menu-close').on('click', function(){
				$('#menuToggle').toggleClass('active');
				$('body').toggleClass('body-push-toleft');
				$('#theMenu').toggleClass('menu-open');
			});



})(jQuery)

$(function() {
	jQuery(".fancybox").fancybox();
});