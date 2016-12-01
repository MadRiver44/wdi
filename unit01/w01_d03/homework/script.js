// an oldie but goodie borrowed from http://jsfiddle.net/9CDtE/4/
$(function(){
    $("span").on({
        mouseover:function(){
            $(this).css({
                left:(Math.random()*300)+"px",
                top:(Math.random()*300)+"px",
            });
        }
    });
});

// repurposed from http://jsfiddle.net/XZ6Sg/
var picker = document.getElementById('colorPicker');
var box = document.getElementById('pony');
picker.addEventListener('change', function(){
   box.style.backgroundColor = this.value;
})
