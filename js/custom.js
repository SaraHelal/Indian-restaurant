/*global $, alert, console*/

$(function () {

	'use strict';


	$('.cover').height($(window).height());

	
	$('.rightNav li').click(function(){

		$(this).addClass('active').siblings().removeClass('active');

	});
	
easyScrollDots({

  // sets to true if you have a fixed navigation
  'fixedNav': false,

  // unique ID of your fixed navigation
  'fixedNavId': '',

  // set to true if your navigation is only sticky when scrolling up
  'fixedNavUpward': false

});

	
	$('.men').click(function(){


		$('html,body').animate({

			scrollTop:$('.thirdContent').offset().top


		} , 1000);

	});	

	$('.eve').click(function(){


		$('html,body').animate({

			scrollTop:$('.booking').offset().top


		} , 2000);

	});	

$('.cont').click(function(){


		$('html,body').animate({

			scrollTop:$('.contact').offset().top


		} , 2000);

	});	

});