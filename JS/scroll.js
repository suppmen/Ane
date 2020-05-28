


/******* slide show ******/

let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("test");
    for (i = 0; i < slides.length; i++) {
//        slides[i].style.display = "none";
                slides[i].style.zIndex = "1";

    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    //
//    slides[slideIndex - 1].style.display = "block";
    slides[slideIndex].classList.toggle("transparent");
        slides[slideIndex - 1].style.zIndex = "1" +  slideIndex;


    setTimeout(showSlides, 2000); // Change image every 2 seconds
};

function currentSlide(e) {
  showSlides(e);
}
