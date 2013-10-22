$( document ).ready(function() {
  	$("#intro").append('<audio autoplay src="sounds/intro.mp3" autobuffer></audio>');
	setTimeout(function() {
	      $("#intro1").fadeIn(7000);
	      $("#intro1").fadeOut(7000);
	}, 2000);

	setTimeout(function() {
      $("#intro2").fadeIn(7000);
      $("#intro2").fadeOut(7000);
	},16000);
	setTimeout(function() {
      $("#intro3").fadeIn(7000);
      setTimeout(function() {
      	$("#intro").fadeOut(7000);
      },8000);
	},30000);
	setTimeout(function() {
	  $("#site").fadeIn(3000);
	  $("audio").remove();
	  slider();
	  addMap();
	},45000);
});

function slider() {
	$.vegas('slideshow', {
	delay:10000,
  backgrounds:[
	    { src:'img/1.png', fade:3000},
	    { src:'img/2.png', fade:3000},
	    { src:'img/3.png', fade:3000},
	    { src:'img/4.png', fade:3000}
   	]
	})('overlay', {
	  src:'img/overlay3.png'
	});
}