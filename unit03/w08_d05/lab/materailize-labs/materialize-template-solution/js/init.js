(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();


$('#download-button').on('click', function() {

  var audio = new Audio("js/fart1.mp3" ) ;
  audio.play();
  // console.log('lcick')
})
  }); // end of document ready
})(jQuery); // end of jQuery name space


