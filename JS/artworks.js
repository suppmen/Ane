

const btnMenu = document.querySelector(".menu-btn");
const btnExit = document.querySelector(".exit-btn");
const headerUl = document.getElementById("menu");

btnMenu.addEventListener("click", showNav);

function showNav() {
    console.log("hi mom", headerUl)
    headerUl.classList.add("shown");
    btnMenu.classList.add("hidden")
    btnMenu.classList.remove("shown")

    btnExit.classList.remove("hidden");
}

btnExit.addEventListener("click", closeMenu);

function closeMenu() {


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

function getData() {

    const urlParams = new URLSearchParams(window.location.search);
//    console.log('URLSearchParams' + window.location);
//    console.log('urlParams', urlParams);
    const the_art_id = urlParams.get('art_id');
    const search_term = urlParams.get('searchTerm');
    const link2 = "https://mymmd.dk/Ane/wp-json/wp/v2/artwork/"+the_art_id+"?per_page=100&_embed";
    console.log(the_art_id, "IdTest");


     if (the_art_id){
        fetch(link2)
        .then(function(response){
            return response.json()
        })
        .then(showSingleArtPage)
    }else{
        fetch(link1)
        .then(function (response) {
            return response.json();
        })
        .then(showData);
    }
}




function showData(artWorkArray) {
    console.log(artWorkArray, "artWorkArray");
    artWorkArray.forEach(art => {
        console.log(art, "LoopTest");

        renderArtworkPage(art);





    });
  showSlides();

}


function renderArtworkPage(ArtworkPageArray){

    const template = document.querySelector(".artwork-page").content;

        const copy = template.cloneNode(true);


      copy.querySelector('.artwork-images').src = ArtworkPageArray._embedded["wp:featuredmedia"][0].source_url;

    copy.querySelector(".info").textContent = ArtworkPageArray.title.rendered;
            const a = copy.querySelector('a');


  if (a){
                    a.href += ArtworkPageArray.id;

        }

        document.querySelector(".artworkwrapper").appendChild(copy);



}


function showSingleArtPage(art){
        console.log(art, "art");
        console.log(window.location);
        const template = document.querySelector("template").content;

        const copy = template.cloneNode(true);

        const divArtDescription = copy.querySelector('#art-description');
        console.log(divArtDescription, "div");


//    if(art.long_description.length> 1){
//        divArtDescription.innerHTML = art.content.rendered;

    copy.querySelector('.title').textContent = art.title.rendered;




        document.querySelector("#single-art").appendChild(copy);

    };


