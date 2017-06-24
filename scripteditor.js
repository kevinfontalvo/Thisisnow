$(document).ready(function () {
     // esconder el body para luego mostrarlo
     $('p').hide();
});
// espera hasta que todo el contenido este descargado
$(window).load(function(){
     // mostrar la etiqueta body lentamente
     $('p').fadeIn("slow");
});
$(window).load(function(){
     // mostrar la etiqueta body lentamente
     $('p').delay(13500).fadeOut("slow");
});
$(document).ready(function () {
     // esconder el body para luego mostrarlo
     $('.main-section').hide();
	$('.boton').hide();
});
// espera hasta que todo el contenido este descargado
$(window).load(function(){
     // mostrar la etiqueta body lentamente
     $('.main-section').delay(15500).fadeIn("slow");
	$('.boton').delay(15500).fadeIn("slow");
});