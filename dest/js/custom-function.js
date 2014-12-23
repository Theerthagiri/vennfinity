$(document).ready(function(event){

	$(document).on("click", ".right-slider-arrow", function(event){
		var $requestUrl = $(this).attr("data-url");
		var $thisID = $(this).attr('id');
		var $requestID = $thisID.replace(/\D/g,'');
		if($requestID > 0){
			var $righty = $('.content-slide');

		    _current_slide_animate($requestID);

		    $righty.animate({
			    "left": $righty.position().left - 975 + 5
		    }, 300, function() {
			    $('.content-slide-box').css({marginTop:0, transform:'none'});
			    _slide_menu_active($requestID);
			    _left_right_slide_animate($requestID);
		    });

		    
			/*$.ajax({
				cache: false,
				type: "GET",
				url:$requestUrl,
				success:function(result){
				    var $righty = $('.content-slide');
				    $righty.animate({
					    "right": -926
				    }, 300, function() {
					    $(".content-section").empty().html(result);
				    });

				    slide_fn($requestID);
				}
			});*/
		}
	});

	$(document).on("click", ".left-slider-arrow", function(event){
		var $requestUrl = $(this).attr("data-url");
		var $thisID = $(this).attr('id');
		var $requestID = $thisID.replace(/\D/g,'');
		if($requestID > 0){

			var $lefty = $('.content-slide');

		    _current_slide_animate($requestID);
	
		    $lefty.animate({ 
		    	"left": $lefty.position().left + 975 - 5
		    }, 300, function() {
		    	$('.content-slide-box').css({marginTop:0, transform:'none'});
		    	_slide_menu_active($requestID);
		    	_left_right_slide_animate($requestID);
		    });

		    
			/*$.ajax({
				cache: false,
				type: "GET",
				url:$requestUrl,
				success:function(result){
				    var $lefty = $('.content-slide');
				    $lefty.removeAttr('style');
				    $lefty.animate({ 
				    	"left": -926
				    }, 300, function() {
				    	$(".content-section").empty().html(result);	
				    });

				    slide_fn($requestID);
				}
			});*/
		}
	});

	function _slide_menu_active($requestID){

		if($requestID == 1){
	    	$('.left-slider-arrow').attr('id', 'curr-page-link-'+0);
	    	$('.right-slider-arrow').attr('id', 'curr-page-link-'+2);
	    	$('.left-slider-arrow').css({cursor: 'default', opacity: 0.5});
	    	$('.top-sub-nav-link').children().find('a').removeClass('active');
	    	$('.top-sub-nav-link').children().eq(0).find('a').addClass('active');
	    }
	    else if($requestID == 2){
	    	$('.right-slider-arrow').attr('id', 'curr-page-link-'+3);
	    	$('.left-slider-arrow').attr('id', 'curr-page-link-'+1);
	    	$('.right-slider-arrow').attr('id', 'curr-page-link-'+3);
	    	$('.left-slider-arrow, .right-slider-arrow').removeAttr('style');
	    	$('.top-sub-nav-link').children().find('a').removeClass('active');
	    	$('.top-sub-nav-link').children().eq(1).find('a').addClass('active');
	    }
	    else if($requestID == 3){
	    	$('.left-slider-arrow').attr('id', 'curr-page-link-'+2);
	    	$('.right-slider-arrow').attr('id', 'curr-page-link-'+4);
	    	$('.left-slider-arrow, .right-slider-arrow').removeAttr('style');
	    	$('.top-sub-nav-link').children().find('a').removeClass('active');
	    	$('.top-sub-nav-link').children().eq(2).find('a').addClass('active');
	    }
	    else if($requestID == 4){
	    	$('.right-slider-arrow').css({cursor: 'default', opacity: 0.5});
	    	$('.left-slider-arrow').attr('id', 'curr-page-link-'+3);
	    	$('.right-slider-arrow').attr('id', 'curr-page-link-'+0);
	    	$('.top-sub-nav-link').children().find('a').removeClass('active');
	    	$('.top-sub-nav-link').children().eq(3).find('a').addClass('active');
	    }
	}

	function _current_slide_animate($requestID){
		$('#curr-page-slide-'+ parseInt($requestID)).removeAttr('style');
		$('#curr-page-slide-'+ parseInt($requestID)).removeClass('left-slide-blur').removeClass('right-slide-blur');
	}

	function _left_right_slide_animate($requestID){

		$('#curr-page-slide-'+ (parseInt($requestID) - 1)).animate({
            opacity:0.3,
            marginTop: 40,
            transform:-5
        },
        {
        step: function(now, fx) {
            $(this).css('-webkit-transform','skewY('+now+'deg)');
            $(this).css('-moz-transform','skewY('+now+'deg)'); 
            $(this).css('transform','skewY('+now+'deg)');  
        },
        duration:300
		},'linear');

    	$('#curr-page-slide-'+ (parseInt($requestID) + 1))
    	.animate({
            opacity:0.3,
            marginTop: 40,
            transform:5
        },
        {
        step: function(now, fx) {
            $(this).css('-webkit-transform','skewY('+now+'deg)');
            $(this).css('-moz-transform','skewY('+now+'deg)'); 
            $(this).css('transform','skewY('+now+'deg)');  
        },
        duration:300
		},'linear');
	}
	/*function slide_fn($requestID){
		if($requestID == 1){
	    	$('.left-slider-arrow').attr('id', 0);
	    	$('.left-slider-arrow').attr('data-url', "");
	    	$('.right-slider-arrow').attr('id', 2);
	    	$('.right-slider-arrow').attr('data-url', "chatter.html");
	    	$('.left-slider-arrow').css({cursor: 'default', opacity: 0.5});
	    	$('.top-sub-nav-link').children().find('a').removeClass('active');
	    	$('.top-sub-nav-link').children().eq(0).find('a').addClass('active');
	    }
	    else if($requestID == 2){
	    	$('.right-slider-arrow').attr('id', 3);
	    	$('.left-slider-arrow').attr('id', 1);
	    	$('.left-slider-arrow').attr('data-url', "about-us.html");
	    	$('.right-slider-arrow').attr('id', 3);
	    	$('.right-slider-arrow').attr('data-url', "fun.html");
	    	$('.left-slider-arrow, .right-slider-arrow').removeAttr('style');
	    	$('.top-sub-nav-link').children().find('a').removeClass('active');
	    	$('.top-sub-nav-link').children().eq(1).find('a').addClass('active');
	    }
	    else if($requestID == 3){
	    	$('.left-slider-arrow').attr('id', 2);
	    	$('.left-slider-arrow').attr('data-url', "chatter.html");
	    	$('.right-slider-arrow').attr('id', 4);
	    	$('.right-slider-arrow').attr('data-url', "people.html");
	    	$('.left-slider-arrow, .right-slider-arrow').removeAttr('style');
	    	$('.top-sub-nav-link').children().find('a').removeClass('active');
	    	$('.top-sub-nav-link').children().eq(2).find('a').addClass('active');
	    }
	    else if($requestID == 4){
	    	$('.right-slider-arrow').css({cursor: 'default', opacity: 0.5});
	    	$('.left-slider-arrow').attr('id', 3);
	    	$('.left-slider-arrow').attr('data-url', "fun.html");
	    	$('.right-slider-arrow').attr('id', 0);
	    	$('.right-slider-arrow').attr('data-url', "");
	    	$('.top-sub-nav-link').children().find('a').removeClass('active');
	    	$('.top-sub-nav-link').children().eq(3).find('a').addClass('active');
	    }
	}*/

	$(window).load(function(event){
		/*$.ajax({
			cache: false,
			type: "GET",
			url:"chatter.html",
			beforeSend: function() {
		       $(".content-section").html("Loding");
		     },
		    complete: function() {
		       
		     },
			success:function(result){
			    $(".content-section").html(result);
			}
		});*/
	});
});