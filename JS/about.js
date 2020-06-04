/************* about page ************/

const btnBio = document.querySelector(".bioBtn");
const btnCv = document.querySelector(".cvBtn");
const bio = document.querySelector(".bio");
const cv = document.querySelector(".cv");


btnBio.addEventListener("click", showBio);

function showBio() {
    bio.classList.remove("hidden");
    cv.classList.add("hidden");
    btnBio.style.fontWeight = "bold";
    btnBio.style.color = "#695559";
    btnCv.style.fontWeight = "400";
    btnCv.style.color = "black";

}

btnCv.addEventListener("click", showCv);

function showCv() {

    bio.classList.add("hidden");
    cv.classList.remove("hidden");
    btnCv.style.fontWeight = "bold";
    btnCv.style.color = "#695559";
    btnBio.style.fontWeight = "400";
    btnBio.style.color = "black";


}



scroll = document.getElementById("scroll");
window.onscroll = function () {
    scrollDisplay()
};

function scrollDisplay() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scroll.style.display = "block";
    } else {
        scroll.style.display = "none";
    }
}

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
