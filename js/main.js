


function slider2() {

let splides = $('.splide');
for ( let i = 0, splideLength = splides.length; i < splideLength; i++ ) {
	new Splide( splides[ i ], {
  // Desktop on down
	perPage: 3,
	perMove: 1,
      autoplay:true,
      interval:2000,
  focus: 0, // 0 = left and 'center' = center
  type: 'loop', // 'loop' or 'slide'
  gap: '2em', // space between slides
  arrows: true, // 'slider' or false
  pagination:false, // 'slider' or false
  speed : 600, // transition speed in miliseconds
  dragAngleThreshold: 60, // default is 30
  autoWidth: false, // for cards with differing widths
  rewind : false, // go back to beginning when reach end
  rewindSpeed : 400,
  waitForTransition : false,
  updateOnMove : true,
  trimSpace: false, // true removes empty space from end of list
  breakpoints: {
		991: {
    	// Tablet
			perPage: 2,
      gap: '3vw',
		},
    767: {
    	// Mobile Landscape
			perPage: 1,
      gap: '3vw',
		},
    479: {
    	// Mobile Portrait
			perPage: 1,
      gap: '3vw',
		}
	}
} ).mount();
}

}

slider2();




$(document).ready(function(){

  /* OPEN MENU */
  $("#menu-btn").on("click", function(){

    $(".nav-links-container").addClass("open");

  });

  /* CLOSE MENU */
  $("#menu-close").on("click", function(){

    $(".nav-links-container").removeClass("open");

  });

    /* CLOSE MENU */
  $(".nav-links-container a").on("click", function(){

    $(".nav-links-container").removeClass("open");

  });


  window.addEventListener("scroll", function(){

  const navbar = document.querySelector(".navbar");

  if(window.scrollY > 100){

    navbar.classList.add("sticky");

  } else {

    navbar.classList.remove("sticky");

  }

});

});



