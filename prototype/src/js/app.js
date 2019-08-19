'use strict';

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookieMessage()
{
	if(getCookie('cookieConfirm') !== 'yes') {
		document.getElementById('cookieMessage').classList.add('show');
	}
}

function cookieAgree()
{
	setCookie('cookieConfirm', 'yes', 365);
	document.getElementById('cookieMessage').classList.remove('show');
}

function slideTo(el)
{
	$('html, body').animate({
		scrollTop: $(el).offset().top - 50
	}, 500);
}

function lazyImages()
{
    $('.lazyset').each(function() {
		var $src = $(this).data('srcset');
		$(this).attr('srcset', $src).removeAttr('data-src');	
    });
	$('.lazy').each(function() {
		var $src = $(this).data('src');
		$(this).attr('src', $src).removeAttr('data-src');	
    });
}

// function menuScroll()
// {
//     var $nav = $('.navigation');
//     var $navH = $nav.outerHeight(true);
//     var $scroll = $(window).scrollTop();
//     var $header = $('.header__home').outerHeight(true) - $navH*3;
// 	if($scroll >= $navH) {
// 		if(!$nav.hasClass('toscroll')) {
// 			$nav.addClass('toscroll');
// 		}
//     } else {
//         if($nav.hasClass('toscroll')) {
// 			$nav.removeClass('toscroll');
// 		}
//     }
//     if($scroll >= $header) {
//         if(!$nav.hasClass('scrolled')) {
// 			$nav.addClass('scrolled');
// 		}
//     } else {
// 		if($nav.hasClass('scrolled')) {
// 			$nav.removeClass('scrolled');
// 		}
// 	}
// }

// function productsCarousel()
// {
//     var $owl = $('.owl-carousel');
// 	$owl.owlCarousel({
//         loop: false,
//         margin: 0,
//         nav: false,
//         dots: true,
//         autoplay: true,
//         autoplayTimeout: 3000,
//         autoplayHoverPause: true,
//         rewind: true,
//         responsive: {
//             0: {
//                 items: 1
//             },
//             480: {
//                 items: 2
//             },
//             768: {
//                 items: 3
//             },
//         }
//     });
//     $('.owl-next').click(function() {
// 		$owl.trigger('next.owl.carousel');
// 	});
// 	$('.owl-prev').click(function() {
// 		$owl.trigger('prev.owl.carousel');
// 	});
// }

// function menuToggle()
// {
//     $('.menu-mobile').on('click', function(){
//         $(this).toggleClass('active').prev().slideToggle(250);
//     });
//     $('.navigation__menu').find('a').on('click', function(){
//         if($(window).width() <= 992) {
//             $('.menu-mobile').toggleClass('active');
//             $('.navigation__menu').slideToggle(250);
//         }
//     });
// }

// function placeholder()
// {
//     $(document).on('focusin', 'input, select, textarea', function() {
//         $(this).next('.select, .placeholder').addClass('hide');
//     });
//     $(document).on('focusout', 'input, select, textarea', function() {
//         if(!$(this).val()) {
//             $(this).next('.select, .placeholder').removeClass('hide');
//         }
//     });
//     $(document).on('click', 'select', function() {
//         if(!$(this).val()) {
//             $(this).next('.select, .placeholder').removeClass('hide');
//         } else {
//             $(this).next('.select, .placeholder').addClass('hide');
//         }
//     });
//     $(document).on('change', 'select', function() {
//         if(!$(this).val()) {
//             $(this).next('.select, .placeholder').removeClass('hide');
//         } else {
//             $(this).next('.select, .placeholder').addClass('hide');
//         }
//     });
}

$(document).ready(function() {

});

$(window).on('load', function() {
    lazyImages();
});

$(window).on('scroll', function() {

});