window.addEventListener("load", getData);



const btnMenu = document.querySelector(".menu-btn");
const btnExit = document.querySelector(".exit-btn");
const headerUl = document.getElementById("menu");

btnMenu.addEventListener("click", showNav);

function showNav() {
    headerUl.classList.add("shown");
    btnMenu.classList.add("hidden")
    btnMenu.classList.remove("shown");
    btnExit.classList.remove("hidden");
}

btnExit.addEventListener("click", closeMenu);

function closeMenu() {


    headerUl.classList.remove("shown");
    btnExit.classList.add("hidden");
    btnMenu.classList.remove("hidden");
    btnMenu.classList.remove("shown");
}




/***** Get Data from WP *****/


const link1 = "https://mymmd.dk/Ane/wp-json/wp/v2/artwork?per_page=100&_embed";
window.addEventListener("DOMContentLoaded", getData);




/***** fetch Data *****/

function getData() {
    fetch(link1)
        .then(function (response) {
            return response.json();
        })
        .then(showData);
}

function showData(artWorkArray) {
    console.log(artWorkArray, "artWorkArray");
    artWorkArray.forEach(art => {
        console.log(art, "LoopTest");

        renderLandingPage(art);

    });
    showSlides();

}




function renderLandingPage(LandingPageImageArray) {

    const template = document.querySelector(".landing").content;

    const copy = template.cloneNode(true);

    copy.querySelector('.current-bg').src = LandingPageImageArray._embedded["wp:featuredmedia"][0].source_url;

    document.querySelector(".bg-container").appendChild(copy);


}




let slideIndex = 0;

function showSlides() {

    let i;
    let slides = document.getElementsByClassName("test");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";

    }
    console.log("showslide", slides)
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    //
    slides[slideIndex - 1].style.display = "block";


    setTimeout(showSlides, 5000); // Change image every 2 seconds
};

