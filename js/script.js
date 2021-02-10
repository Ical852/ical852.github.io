//smooth scroll
$('.page-scroll').on('click', function(e){

	var tujuan = $(this).attr('href');

	var elemenTujuan = $(tujuan);

	$('html, body').animate({
		scrollTop: elemenTujuan.offset().top - 60
	}, 400);

	e.preventDefault();
});


//parallax

//jumbotron load

$(window).on('load', function(){
	$('.jumb1').addClass('jumb1Appear');
});

//jumbotron scroll

$(window).scroll(function(){
	var wScroll = $(this).scrollTop();

	//jumbotron

	$('.jumbotron img').css({
		'transform' : 'translate(0px, '+ wScroll/3.7+'%)'
	});

	$('.jumbotron h1').css({
		'transform' : 'translate(0px, '+ wScroll/1.5 +'%)'
	});

	$('.jumbotron p').css({
		'transform' : 'translate(0px, '+ wScroll/0.8 +'%)'
	});

	$('.jumbotron button').css({
		'transform' : 'translate(0px, '+ wScroll/1 +'%)'
	});

});