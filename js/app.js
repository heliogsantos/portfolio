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

// // Detalhes

// function cont() {
// myLoop();
// myLoop2();   

// var i = 0;                    
// var totalCount = 160;
// function myLoop () {           
//    setTimeout(function () {    
//       $('#contador2').html(i);          
//       i++;                     
//       if (i <= totalCount) {           
//          myLoop();             
//       }
//    }, 10)
// }
// var c = 0;                    
// var totalCount2 = 16;
// function myLoop2 () {           
//    setTimeout(function () {    
//       $('#contador').html(c);          
//       c++;                     
//       if (c <= totalCount2) {           
//          myLoop2();             
//       }
//     }, 100)
//   }
// }
// cont();



