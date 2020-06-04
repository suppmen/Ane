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




/***** fetch Data *****/

function getData() {
    fetch(link1)
        .then(function (response) {
            return response.json();
        })
        .then(showData);
}

function showData(artWorkArray) {
    artWorkArray.forEach(art => {

        renderLandingPage(art);

    });
    showSlides();

}




function renderLandingPage(LandingPageImageArray) {

    const template = document.querySelector(".landing").content;

    const copy = template.cloneNode(true);

    copy.querySelector('.current-bg').src = LandingPageImageArray._embedded["wp:featuredmedia"][0].source_url;
    copy.querySelector('.current-bg').id = LandingPageImageArray.id;

    document.querySelector(".bg-container").appendChild(copy);



    const dotsTemplate = document.querySelector(".circles-temp").content;

    const dotsCopy = dotsTemplate.cloneNode(true);

    dotsCopy.querySelector('.title').textContent = LandingPageImageArray.art_name;
    dotsCopy.querySelector('.title').id = LandingPageImageArray.id;
    dotsCopy.querySelector('.circle').id = LandingPageImageArray.id;


    document.querySelector(".circles-wrapper").appendChild(dotsCopy);



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
    slides[slideIndex - 1].style.display = "block";

    dotsTitles = document.querySelectorAll(".title");
    dotsTitles.forEach(title => {
                            console.log('this is matching title', slides[slideIndex]     )

        if (title.id === slides[slideIndex - 1].id) {
                    console.log('this is matching title', title + title.id)

            title.style.opacity = "1";
        }else{
            title.style.opacity = "0";
        }
    });

       circles = document.querySelectorAll(".circle");
    circles.forEach(circle => {
                            console.log('this is matching title', slides[slideIndex]     )

        if (circle.id === slides[slideIndex - 1].id) {
                    console.log('this is matching title', circle + circle.id)

            circle.style.background = "white";
        }else{
            circle.style.background = "none";
        }
    });


    setTimeout(showSlides, 5000); // Change image every 2 seconds
};

