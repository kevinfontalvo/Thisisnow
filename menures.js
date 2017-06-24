$(document).ready(main);
var contador = 1;

function main(){
	if ($(window).width()<800)  {
	$('.botonmenu').click(function(){
		if(contador == 1){
			$('nav').animate({
				width: '80%',
			});
			contador = 0;
		} else{
			contador=1;
			$('nav').animate({
				width: '0%',
		})
		}
						 
	});
		
	};	
}
