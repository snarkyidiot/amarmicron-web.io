

//product slider

$('.product-carousel').owlCarousel({
  loop:true,
  margin:30,
  dots:false,
  nav:false,
  autoplay:true,
  autoplayHoverPause: true,
  smartSpeed:650,
  autoplayTimeout:5000,
  slideSpeed: 800,
  responsive:{
    0:{
      items:1
    },
    600:{
      items:1
    },
    800:{
      items:2
    },
    1000:{
      items:2
    }
  }
})


//indstry slider

$('.industries-carousel').owlCarousel({
  loop:true,
  margin:5,
  nav:true,
  navText : ['<i class="fa fa-long-arrow-left" aria-hidden="true"></i>','<i class="fa fa-long-arrow-right" aria-hidden="true"></i>'],
  items:5,
  autoplay:true,
  autoplayHoverPause: true,
  smartSpeed:650,
  autoplayTimeout:5000,
  slideSpeed: 800,
  responsive:{
    0:{
      items:1
    },
    600:{
      items:2
    },
    1000:{
      items:5
    }
  }
})


//bottom to top


var mybutton = document.getElementById("myBtn1");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



//preloader

$(window).on("load", function() {
  $('#preloader').fadeOut('100');
});




// sticky navbar

var navBar = $("#topnav");
var hdrHeight = $(".header-top").height();


$(window).scroll(function() {
  if( $(this).scrollTop() > hdrHeight + 50) {
    navBar.addClass("navScrolled");
  } else {
    navBar.removeClass("navScrolled");
  }
});

/*translate*/
function googleTranslateElementInit() {
  new google.translate.TranslateElement({
    pageLanguage: 'en'
  },
  'google_translate_element'
  );
}



//whats-up

$(window).on("scroll", function() {
  if($(window).scrollTop() > 400) {
    $(".whats-up").css('display','block');
  } else {
    $(".whats-up").css('display','none');
  }
});
