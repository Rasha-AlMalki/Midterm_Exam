
function getRandom(){
  var RandomNumber1 = Math.floor(Math.random() * 9) + 1;
  var RandomNumber2 = Math.floor(Math.random() * 9) + 1;
  var RandomNumber3 = Math.floor(Math.random() * 9) + 1;
  var RandomNumber4 = Math.floor(Math.random() * 9) + 1;
  var RandomNumber5 = Math.floor(Math.random() * 9) + 1;
  var RandomNumber6 = Math.floor(Math.random() * 9) + 1;
  var RandomNumber7 = Math.floor(Math.random() * 9) + 1;
  var RandomNumber8 = Math.floor(Math.random() * 9) + 1;
  var RandomNumber9 = Math.floor(Math.random() * 9) + 1;

  var a = document.querySelector('#number1').innerHTML=(RandomNumber1);
  var b = document.querySelector('#number2').innerHTML=(RandomNumber2);
  var c = document.querySelector('#number3').innerHTML=(RandomNumber3);
  var d = document.querySelector('#number4').innerHTML=(RandomNumber4);
  var e = document.querySelector('#number5').innerHTML=(RandomNumber5);
  var f = document.querySelector('#number6').innerHTML=(RandomNumber6);
  var g = document.querySelector('#number7').innerHTML=(RandomNumber7);
  var h = document.querySelector('#number8').innerHTML=(RandomNumber8);
  var i = document.querySelector('#number9').innerHTML=(RandomNumber9);

  var array =[];
  document.querySelector('#number1').addEventListener("mouseover", function(){
    document.querySelector('#number1').style.visibility = "hidden";
    array.push(document.querySelector('#number1').textContent);
    if (array.length==9){alert("The order in which the numbers disappeared is:"+array);}
  });
  document.querySelector('#number2').addEventListener("mouseover", function(){
    document.querySelector('#number2').style.visibility = "hidden";
    array.push(document.querySelector('#number2').textContent);
    if (array.length==9){alert("The order in which the numbers disappeared is:"+array);}
  });
  document.querySelector('#number3').addEventListener("mouseover", function(){
    document.querySelector('#number3').style.visibility = "hidden";
    array.push(document.querySelector('#number3').textContent);
    if (array.length==9){alert("The order in which the numbers disappeared is:"+array);}
  });
  document.querySelector('#number4').addEventListener("mouseover", function(){
    document.querySelector('#number4').style.visibility = "hidden";
    array.push(document.querySelector('#number4').textContent);
    if (array.length==9){alert("The order in which the numbers disappeared is:"+array);}
  });
  document.querySelector('#number5').addEventListener("mouseover", function(){
    document.querySelector('#number5').style.visibility = "hidden";
    array.push(document.querySelector('#number5').textContent);
    if (array.length==9){alert("The order in which the numbers disappeared is:"+array);}
  });
  document.querySelector('#number6').addEventListener("mouseover", function(){
    document.querySelector('#number6').style.visibility = "hidden";
    array.push(document.querySelector('#number6').textContent);
    if (array.length==9){alert("The order in which the numbers disappeared is:"+array);}
  });
  document.querySelector('#number7').addEventListener("mouseover", function(){
    document.querySelector('#number7').style.visibility = "hidden";
    array.push(document.querySelector('#number7').textContent);
    if (array.length==9){alert("The order in which the numbers disappeared is:"+array);}
  });
  document.querySelector('#number8').addEventListener("mouseover", function(){
    document.querySelector('#number8').style.visibility = "hidden";
    array.push(document.querySelector('#number8').textContent);
    if (array.length==9){alert("The order in which the numbers disappeared is:"+array);}
  });
  document.querySelector('#number9').addEventListener("mouseover", function(){
    document.querySelector('#number9').style.visibility = "hidden";
    array.push(document.querySelector('#number9').textContent);
    if (array.length==9){alert("The order in which the numbers disappeared is:"+array);}
  });

}
