$('<h3>Ready...Set...Sing...</h3>').insertAfter('h1'); 
const arr = [;
const count = 10;

("#sing-button").click(function() 
  for (let i = count; i > -1; i--)  {
    if (i > 1) { 
      arr.push(`<li class = 'bottle'> ${i} bottles of beer on the wall`); 
    } else if (i === 1) { 
      arr.push(`<li class = 'bottle'>  ${i}  bottle of beer on the wall`); 
    } else{ arr.push(`<li class = 'bottle'> no more bottles of beer on the wall`; }
  }
 }); 

 let arrCounter = 0;
 let counter = 10;
 const interval = setInterval(function( {     
    if( counter == -1 ) { 
      clearInterval(interval);
      counter = 10;
      arrCounter = 0;
    } 
    else { ('#bottles'.append(arr[arrCounter++);
           counter--
           console.log(`This has run ${arrCounter} times`
    } 
  },1000)
 







