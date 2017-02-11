var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides"); //get elements
    
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    } //loop1
    slideIndex++;
    
    if (slideIndex > x.length) { //loop2
    	slideIndex = 1
    } 
    x[slideIndex-1].style.display = "block"; 
    setTimeout(carousel, 2500); 
}