
var image = document.getElementById("imge");
var currentPos = 0;
var images = ["Blue.jpg", "Yellow.jpg", "Green.png","Orange.png","Purple.png","White.jpg","Red.jpg","Pink.jpg"]


let txt2=document.getElementById("txt2")
let text2=document.getElementById("text2")
let button=document.getElementById("but")

function volgendefoto() {
    if (++currentPos >= images.length)
        currentPos = 0;
     
    image.src = images[currentPos];
   if (images[currentPos]=="Blue.jpg"){
    button.style.display="unset";
   txt2.innerHTML="Cloud-on-a-stick"
   text2.innerHTML="An entire enterprise infrastructure on a read-only bootable USB"
}else if (images[currentPos]=="Yellow.jpg"){
  button.style.display="none";
  txt2.innerHTML="Anti-Password Organization"
  text2.innerHTML="No passwords, for anyone, in your organization"
  button.style.display="none";
}else if (images[currentPos]=="Green.png"){
  button.style.display="none";
  txt2.innerHTML="Absolute-Zero Trust Enterprise"
  text2.innerHTML="Because we don’t trust anyone either"
}else if (images[currentPos]=="Orange.png"){
  button.style.display="none";
  txt2.innerHTML="Secrets in Silicon"
  text2.innerHTML="Software keys are hackable, hardware keys, well, that’s a different game"
}
else if (images[currentPos]=="Purple.png"){
  button.style.display="none";
  txt2.innerHTML="Database of Digital Stone"
  text2.innerHTML="It’s not read-only, it’s cryptographically tamperproof"
}
else if (images[currentPos]=="White.jpg"){
  button.style.display="none";
  txt2.innerHTML="License-free Infrastructure"
  text2.innerHTML="No annual fees, no key management or deployments, no hassle"
}
else if (images[currentPos]=="Red.jpg"){
  button.style.display="none";
  txt2.innerHTML="Red team tools"
  text2.innerHTML="Supporting those who do the good work"
}
else if (images[currentPos]=="Pink.jpg"){
  button.style.display="none";
  txt2.innerHTML="Universal data"
  text2.innerHTML="Collect, process, and display an eclectic array of sources in one unified interface"
}
}

setInterval(volgendefoto, 5000);

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  
  showSlides(slideIndex += n);
  //setInterval(volgendefoto, 5000);
}

function currentSlide(n) {
 
  showSlides(slideIndex = n);
  //setInterval(volgendefoto, 5000);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
 // let txt=document.getElementById("txt2")
 // let text2=document.getElementById("text2")
 // let txt3=document.getElementById("txt3")
 // let text3=document.getElementById("text3")
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
     
    
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
      
  }
 
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  
}




