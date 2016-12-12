var kkeys = [], konami = "38,38,40,40";
$(document).keydown(function(e) {
  kkeys.push( e.keyCode );
  if ( kkeys.toString().indexOf( konami ) >= 0 ){
    $(document).unbind('keydown',arguments.callee);
    $.getScript('http://www.cornify.com/js/cornify.js',function(){
      for(let i = 0; i < 10; i++) cornify_add();
      $(document).keydown(cornify_add);
    });
  }
});