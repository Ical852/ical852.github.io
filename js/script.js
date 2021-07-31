$(document).ready(function(){
    $('#model').addClass('yes');
});

$(window).scroll(function(){
	$(document).scroll(function () {
        var y = $(this).scrollTop();
    if (y > 500) {
        $('#model').removeClass('yes');
    } else {
        $('#model').addClass('yes');
    }
    });
});

$(document).ready(function(){
    $('#identity').addClass('yes');
});

$(window).scroll(function(){
	$(document).scroll(function () {
        var y = $(this).scrollTop();
        if (y > 500) {
            $('#identity').removeClass('yes');
        } else {
            $('#identity').addClass('yes');
        }
    });
});

$(document).ready(function(){
    $('#about').addClass('yes');
});

$(window).scroll(function(){
	$(document).scroll(function () {
        var y = $(this).scrollTop();
        if ($(window).width() > 1000 ) {
            if (y > 950) {
                $('#about').removeClass('yes');
            } else {
                $('#about').addClass('yes');
            }
        } else if ($(window).width() < 1000  
                    && $(window).width() > 750 ) {
            if (y > 1000) {
            $('#about').removeClass('yes');
            } else {
                $('#about').addClass('yes');
            }
        } else if ($(window).width() < 750) {
            if (y > 1250) {
            $('#about').removeClass('yes');
            } else {
                $('#about').addClass('yes');
            }
        }
        
    });
});

// $(window).scroll(function(){
// 	$(document).scroll(function () {
//         var y = $(this).scrollTop();
//         if (y > 500 && y < 1150) {
//             $('.portfolio-text').addClass('yes');
//         } else {
//             $('.portfolio-text').removeClass('yes');
//         }
//     });
// });