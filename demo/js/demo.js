// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
    document.getElementById("navbar").style.padding = "12px 10px";
    document.getElementById("logo").style.fontSize = "24px";

  } else {
    document.getElementById("navbar").style.padding = "25px 10px";
    document.getElementById("logo").style.fontSize = "25px";
    
  }
} 

// Burger change 
function burgerChange(x){
  x.classList.toggle('change');
}

function openNav(){
  document.getElementById('navbar-right').classList.toggle('showNav');

}

// header Scroll################################################
var nav_link = document.querySelectorAll('nav-link');

window.addEventListener('scroll', ()=>{
  let scroll = window.scrollY;

  if(scroll > 0 && scroll < 600){
    nav_link.forEach(link => link.classList.remove('active'));
    item3.classList.remove('active');
    item2.classList.remove('active');
    item1.classList.add('active');
  }else if(scroll > 600 && scroll < 1190){
    nav_link.forEach(link => link.classList.remove('active'));
    item3.classList.remove('active');
    item1.classList.remove('active');
    item2.classList.add('active');
  } else if(scroll > 1190 && scroll < 2000){
    nav_link.forEach(link => link.classList.remove('active'));
    item1.classList.remove('active');
    item2.classList.remove('active');
    item3.classList.add('active');
  }

})

nav_link.forEach( nav_link =>{
  nav_link.addEventListener('click', (e)=>{
    nav_link.forEach(link => link.classList.remove('active'))
    item1.classList.remove('active');
    item2.classList.remove('active');
    item3.classList.remove('active');
    
    e.target.classList.add('active')
  })
})


// fade animation

// var slideIndex = 0;
// showSlides();

// function showSlides() {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   console.log(slides.length)
//   // for (i = 0; i < slides.length; i++) {
//   //   slides[i].style.display = "none";
//   // }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}
//   slides[slideIndex-1].style.display = "block";
//   setTimeout(showSlides, 10000); // Change image every 2 seconds
// } 

// Click calculer pour l'equation

function success(){
  document.getElementById('equationResult').classList.add('show'); 
}
function success2(){
  document.getElementById('circuitResult').classList.add('show');
}
window.onmousedown = function() {
  document.getElementById('equationResult').classList.remove('show');
  document.getElementById('circuitResult').classList.remove('show');
 } 


// variable Resultat calcul
var logo = document.querySelector('#imgResult');
var text = document.querySelector('#textResult');
var poptitre = document.querySelector('#poptitre');
var textResult = "";

function showResultatSuccess(){
  text.innerHTML = textResult;
  poptitre.textContent = "Success!";
  logo.className = 'y-result';
}
function showResultatError(){
  text.innerHTML = textResult;
  poptitre.textContent = 'Erreur!';
  logo.className = 'x-result';
}

// variable Resultat calcul
var logo2 = document.querySelector('#imgResult2');
var text2 = document.querySelector('#textResult2');
var poptitre2 = document.querySelector('#poptitre2');
var textResult2 = "";

function showResultatSuccess2(){
  text2.innerHTML = textResult2;
  poptitre2.textContent = "Success!";
  logo2.className = 'y-result';
}
function showResultatError2(){
  text2.innerHTML = textResult2;
  poptitre2.textContent = 'Erreur!';
  logo2.className = 'x-result';
}

// ############## equation code (second degree) ####################

function equationSolution(){
  success();
  var nb1 = document.getElementById("nb1").value;
  var nb2 = document.getElementById("nb2").value;
  var nb3 = document.getElementById("nb3").value;
  
  var nb1 = parseInt(nb1);
  var nb2 = parseInt(nb2);
  var nb3 = parseInt(nb3);

  console.log(nb1);
  console.log(nb2);
  console.log(nb3);

  while(isNaN(nb1)){
    textResult = "<p>Veuillez entrez le coefficient de X<sup>2</sup></p>";
    console.log(textResult);
    showResultatError();
    return false;
  }

  while(isNaN(nb2)){
    textResult = "<p>Veuillez entrez le coefficient de X </p>";
    console.log(textResult);
    showResultatError();
    return false;
  }

  while(isNaN(nb3)){
    textResult = "<p>Veuillez entrez le coefficient du X<sup>0</sup>";
    console.log(textResult);
    showResultatError();
    return false;
  }

  if(nb1 == 0){
    textResult = "<p>Coefficient X<sup>2</sup> = 0 n'est pas une equation du second degree</p>";
    showResultatError();
    return false;
  }else{
    var delta = (nb2 * nb2) - 4 *(nb1)*(nb3);
    console.log(delta)
    if(delta < 0){
      textResult = "<p>Delta = " +delta+ ", ∆<0 alors pas de solution reelles.</p>"
      showResultatSuccess();
    }else if(delta == 0){
      x = (-(nb2))/-(2)*(nb1);
      textResult = "<p>Delta = 0, on a une solution double X<sub>1</sub> = X<sub>2</sub> = " +x.toFixed(2)+ "</p>";
      showResultatSuccess();
    }else{
      x1 = (-(nb2) - Math.sqrt(delta))/-(2)*(nb1);

      x2 = (-(nb2) + Math.sqrt(delta))/-(2)*(nb1);
      textResult = "<p>Delta = " +delta+ ", ∆>0 alors on a deux racines distincts:<br> X<sub>1</sub> = "+x1.toFixed(2)+" et  X<sub>2</sub> = " +x2.toFixed(2)+ "</p>";
      showResultatSuccess();
    }
  }
}

// ################# Circuit Analogique #####################
function circuitSolution(){
  success2();

  var U = document.getElementById('U').value;
  var R1 = document.getElementById('R1').value;
  var R2 = document.getElementById('R2').value;
  var R3 = document.getElementById('R3').value;
  var R4 = document.getElementById('R4').value;

  var U = parseFloat(U);
  var R1 = parseFloat(R1);
  var R2 = parseFloat(R2);
  var R3 = parseFloat(R3);
  var R4 = parseFloat(R4);

  while(isNaN(U)){
    textResult2 = "<p>Veuillez entrez la valeur de U</p>";
    showResultatError2();
    return false;
  }
  while(isNaN(R1)){
    textResult2 = "<p>Veuillez entrez la valeur de R1</p>";
    showResultatError2();
    return false;
  }
  while(isNaN(R2)){
    textResult2 = "<p>Veuillez entrez la valeur de R2</p>";
    showResultatError2();
    return false;
  }
  while(isNaN(R3)){
    textResult2 = "<p>Veuillez entrez la valeur de R3</p>";
    showResultatError2();
    return false;
  }
  while(isNaN(R4)){
    textResult2 = "<p>Veuillez entrez la valeur de R4</p>";
    showResultatError2();
    return false;
  }


  // calcul de l'intensite principal
  var ReqR2R3 = (R2 * R3) / (R2 + R3);
  var Reqtt = R1 + ReqR2R3 + R4;
  var I = U / Reqtt; 
  
  // calcul intensite de chaque resistor
  var I1 = I;
  var I4 = I1;


  var I3 = ((R2)/(R2 + R3)) * I;
  var I2 = ((R3)/(R2 + R3)) * I;


  // calcul tension de chaque resistor
  var U2 = R2 * I2;
  var U3 = R3 * I3;
  var U1 = R1 * I;
  var U4 = R4 * I;



  textResult2 = "<p>I = "+I.toFixed(2)+" A | I1 = I4 = "+ I4.toFixed(2)+"A | I3 = "+ I3.toFixed(2)+"A <br>  I2 = "+ I2.toFixed(2)+"A  | U2 = U3 = "+U.toFixed(2)+"V  <br> | U1 = "+U1.toFixed(2)+"V | U4 = "+U4.toFixed(2)+"V</p> ";
  showResultatSuccess2();

}

var pubbliciter = new Array; 

pubbliciter = document.querySelectorAll('.pub-img');

var i = 0;
var j = 1;

setInterval(() => {
    pubbliciter[i].setAttribute("style", "z-index: "+j+";");

    i++;
    j++;

    if (i > 4) {
        i = 0;
    }

}, 3000);