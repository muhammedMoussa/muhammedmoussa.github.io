$(function () {

	"use strict";
	
	$(window).scroll(function () {
	
	  par();
	  
	});
	
	function par() {
	
	  var scrollPosition = $(window).scrollTop();
	  
	  $('.par').css('margin-top', (0 - (scrollPosition * .8)) + 'px');
	}
	
	// Resizing Header + Body
	
	var head = $(".header"),
	
		myRow = $(".my-row");
	
	head.css({
	
	   'height': $(window).height()
	   
	});
	
	myRow.css({
		
		'height': $(window).height(),
		'width': $(window).width()
		
	});
	
	$(window).on("resize", function() {
	
	    head.css({
	    
	    	'height': $(window).height()
	    });
	    
	    $('body').css({
	    
	    	'width': $(window).width() 
	    })
	    
		myRow.css({
			
			'height': $(window).height(),
			'width': $(window).width()
			
		});
	    
	});
	
});