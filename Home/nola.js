//Slideshow code almost 100% stolen from w3 school
let slideIndex = 1;
showSlides(slideIndex);
 
 
document.onkeydown = checkKey;


//https://stackoverflow.com/questions/5597060/detecting-arrow-key-presses-in-javascript
function checkKey(e) {

    e = e || window.event;

    
     if (e.keyCode == 37) {
       plusSlides(-1);
    }
    else{
       plusSlides(1);
    }
}


function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
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
  captionText.innerHTML = dots[slideIndex-1].alt;
}