$(function(){
	var scroll = $(".scroll");
	var corpo = $('html,body');

	$(document).ready(function($) { 
    scroll.click(function(event){        
        event.preventDefault();
        corpo.animate({scrollTop:$(this.hash).offset().top -40.}, 1100);
  	 });
   });
}());
