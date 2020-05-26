
const btnMenu = document.querySelector(".menu-btn");
const btnExit = document.querySelector(".exit-btn");
const headerUl = document.getElementById("menu");

btnMenu.addEventListener("click", showNav);
function showNav(){
    console.log("hi mom", headerUl)
    headerUl.classList.add("shown");
    btnMenu.classList.add("hidden")
        btnMenu.classList.remove("shown")

    btnExit.classList.remove("hidden");
}

btnExit.addEventListener("click", closeMenu);
function closeMenu(){


    headerUl.classList.remove("shown");
   btnExit.classList.add("hidden");
    btnMenu.classList.add("shown");

    headerUl.classList.add("hidden");
            console.log("hi dad", headerUl)

}




/***** Get Data from WP *****/


const link1 = "https://mymmd.dk/Ane/wp-json/wp/v2/artwork?per_page=100&_embed";
window.addEventListener("DOMContentLoaded", getData);




/***** fetch Data *****/

function getData(){
    fetch(link1)
    .then(function(response){
        return response.json();
    })
    .then(showData);
}

function showData(artArray){
   console.log(artArray, "artArray");
    artArray.forEach(art => {
        console.log(art,"LoopTest");



    });


}
