$(document).ready(function() {
	// Header Scroll
	$(window).on('scroll', function() {
		var scroll = $(window).scrollTop();

		if (scroll >= 50) {
			$('#header').addClass('fixed');
		} else {
			$('#header').removeClass('fixed');
		}
	});


	// Flexslider
	$('.flexslider').flexslider({
		animation: "fade",
		directionNav: false,
	});

	// Page Scroll
	var sections = $('section')
		nav = $('nav[role="navigation"]');

	$(window).on('scroll', function () {
	  	var cur_pos = $(this).scrollTop();
	  	sections.each(function() {
	    	var top = $(this).offset().top - 276
	        	bottom = top + $(this).outerHeight();
	    	if (cur_pos >= top && cur_pos <= bottom) {
	      		nav.find('a').removeClass('active');
	      		nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
	    	}
	  	});
	});
	nav.find('a').on('click', function () {
	  	var $el = $(this)
	    	id = $el.attr('href');
		$('html, body').animate({
			scrollTop: $(id).offset().top - 75
		}, 500);
	  return false;
	});

	// Mobile Navigation
	$('.nav-toggle').on('click', function() {
		$(this).toggleClass('close-nav');
		nav.toggleClass('open');
		return false;
	});	
	nav.find('a').on('click', function() {
		$('.nav-toggle').toggleClass('close-nav');
		nav.toggleClass('open');
	});
});


//----------form-----
const main = document.querySelector("main");
const form = document.querySelector("form");
const fullName = document.getElementById("fname");
const email = document.getElementById("email");
const message = document.getElementById("message");
const pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;


const collectedData = {
    fullName: null,
    email: null,
    message: null
};

const errors = {};


function validateForm(ev) {
    ev.preventDefault();

    
    // -------------------------------validating full name-----------------------
    
    
    if (fullName.value !== "") {
        if (fullName.value) {
            collectedData.fullName = fullName.value;
            delete errors.fn;
        } else {
            errors.fn = "full name is invalid";
        }
    } else {
        errors.fn = "full name is missing";
    }

    
    //---------------------------------------validate email-------------------
    
    
    if (email.value !== "") {
        if (pattern.test(email.value)) {
            //-----now, add that value to collectedData.email----------
            collectedData.email = email.value;
            delete errors.em;
        } else {
            errors.em = "Email is invalid";
        }
    } else {
        errors.em = "Email is missing";
    }

    
    //---------------------------------validate message-----------------------
    
    
    if (message.value !== "") {
        if (message.value) {
            collectedData.message = message.value;
            delete errors.ms;
        } else {
            errors.ms = "Message is invalid";
        }
    } else {
        errors.ms = "Message is missing";
    }

    //-------------------------provide feedback or error-report----------------
    
    
    if (Object.keys(errors).length === 0) {
        console.log(collectedData);
    } else {
        console.log(errors)
    }

} //--------------------------submit--------------------------------

form.addEventListener("submit", validateForm);