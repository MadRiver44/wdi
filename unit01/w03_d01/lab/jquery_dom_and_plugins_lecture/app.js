/* target . method --- even type -------event handler-----*/
/*window.addEventListener('click', function(e) {
  console.log(e);
  //console.log(e.target);
});
*/
//Globals

let seqArr = [],
  secret = '83,69,67,82,69,84';


$(window).on('keydown', function(e) {
  console.log(e.key, e.keyCode, e.ctrlKey, e.which);
  tutorialHelp(e);
  manageSquares(e);
  sequenceCombo(e)
});


function manageSquares(e) {
  if (e.keyCode === 40) {
    $('<div class="squares"></div>').appendTo('#square_container').fadeIn();
  }
  if (e.keyCode === 38) {
    $('#square_container .squares:last')
      .fadeOut(110, function() {
        $(this).remove();
      });
  }
}

function sequenceCombo(e) {
  seqArr.push(e.keyCode);
  if (seqArr.toString().indexOf(secret) >= 0) {
    alert('BLUE FAIRY: You have unleashed the secrets');
    seqArr = [];
  }
  //console.log('sequenceCombo --->', seqArr)
}

function tutorialHelp(e) {
  if (e.shiftKey && e.keyCode === 191) {
    $('#howto').fadeToggle();
  }
}

$('#square_container').on('dblclick', '.squares', function() {
  $(this).addClass('like');
});



$(function() {
  /*  $('ul li:first').css({
        'background-color': 'red'
    }).on('click', function(e) {
        //console.log(e.currentTarget.childNodes[0]);
        console.log($(this).data());
        //console.log(e);
    });*/

  const el = document.getElementById('hw2');

  el.addEventListener('mouseover', function(e) {
    console.log(e.type);
  });

  el.addEventListener('click', function f1(e) {
    //console.log(e.which)
    console.log(e)
  });

  $('form').on('submit', function(e) {
    e.preventDefault();
  })
});