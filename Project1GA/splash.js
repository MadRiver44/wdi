// modified from https://appendto.com/2016/09/how-to-make-circularcurved-text-with-javascript/
/*function circularText(txt, radius, classIndex) {
  txt = txt.split(""),
    classIndex = document.getElementsByClassName("circTxt")[classIndex];
  var deg = 360 / txt.length,
    origin = 0;
  txt.forEach((ea) => {
    ea = `<p style='height:${radius}px;position:absolute;transform:rotate(${origin}deg);transform-origin:0 100%'>${ea}</p>`;
    classIndex.innerHTML += ea;
    origin += deg;
  });
}

circularText("this text is in a circle ", 100, 0);

*/
