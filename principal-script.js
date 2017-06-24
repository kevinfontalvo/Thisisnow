
		
$(document).ready(function(){
	
	if ($(window).width() < 320) {
	var xanchologo = $(window).height();
	var yanchologo = xanchologo *15;
	var anchologo = yanchologo /100;}
$('.logo').css({"margin-top": "90px", "width":anchologo +"px"});
	
	if ($(window).width() < 480) {
	var xanchologo = $(window).height();
	var yanchologo = xanchologo *20;
	var anchologo = yanchologo /100;}
		else{
				var xanchologo = $(window).height();
				var yanchologo = xanchologo *30;
				var anchologo = yanchologo /100;
		}
	
	var flag=false;
	var scrol;
	$('.logo').css({"margin-top": "90px", "width":anchologo +"px"})

	
	$(window).scroll(function(){
		scrol = $(window).scrollTop();
	
			if(scrol > 200){
				if(!flag){
				$('.logo').css({"margin-top": "20px",
								"margin-left": "50px",
								"width":"35px","height":"auto"})
					if ($(window).width() >800) {
							$('#bnav').css({
								'width':'100'+'%',
								'margin-top': '0px',
								'height':'70'+'px',
							});
					}else{
						$('#bnav').css({
							'width':'0'+'%',
						})
					}
				flag = true;
				}
			} else{
				if(flag){
				$('.logo').css({
					"margin-left": "20px",
					"margin-top": "90px", "width":anchologo +"px","height":"auto"})
					if ($(window).width() >800) {
						$('#bnav').css({
					'width':'90'+'%',
					'margin-top': '10px',
					'height':'70'+'px',
				});
					}
				flag = false;
				}
			}
	});
	var altopag = $(window).height();
	ajustesseccion1 ();
	function ajustesseccion1 (){
		$('.principal').css({
			'margin-top': altopag -'50' + "px",
			'height': altopag
		});
		
		
	};
	ajustesseccion2 ();
	function ajustesseccion2 (){
		$('#seccion2').css({
			'height': altopag
		})
	};
	
	
	$(document).scroll(function(){
		var ruedaraton = $(this).scrollTop();
		var pixels = ruedaraton / 70;
		
			if(ruedaraton<altopag){
				$('section#banner').css({
					'-webkit-filter':'blur('+pixels+'px)',

				})
			}
	});
	$("#boton1").click(function () {
    $('html,body').animate({
        scrollTop: $(".principal").offset().top-10+'px'
    }, 1000);
});
	$("#baja").click(function () {
    $('html,body').animate({
        scrollTop: $(".principal").offset().top-10+'px'
    }, 1000);
});
	$("#boton2").click(function () {
    $('html,body').animate({
        scrollTop: $("#seccion2").offset().top-30+'px'
    }, 1000);
});
	$("#boton3").click(function () {
    $('html,body').animate({
        scrollTop: $("#seccion3").offset().top-20+'px'
    }, 1000);
});
	$("#boton4").click(function () {
    $('html,body').animate({
        scrollTop: $("#banner").offset().top-20+'px'
    }, 1000);
	});
});
	
