

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
    const the_art_id = urlParams.get('art_id');
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
    copy.querySelector(".short-description").textContent = art.short_description;
    copy.querySelector(".area").textContent = art.place_year;
    copy.querySelector(".topimg").src = art._embedded["wp:featuredmedia"][0].source_url;
    copy.querySelector(".long-description").textContent = art.long_description;
   if(art.portrait_one.guid){
    copy.querySelector(".portrait1").src = art.portrait_one.guid;}

    if(art.portrait_two.guid){
    copy.querySelector(".portrait2").src = art.portrait_two.guid;}

    if(art.portrait_three === true){
    copy.querySelector(".portrait3").src = art.portrait_three.guid;}
     if(art.portrait_four.guid === 1){
    copy.querySelector(".portrait4").src = art.portrait_four.guid;}
    if(art.landscape_one.guid){
    copy.querySelector(".landscape").src = art.landscape_one.guid;}

    const imgGalleryParent = copy.querySelector(".img-gallery");

    if(art.gallery_pictures){
    art.gallery_pictures.forEach(picture =>{
        const currentImg = document.createElement("img");
        currentImg.src = picture.guid;
                console.log(currentImg, "in gallery pictures loop");

    imgGalleryParent.appendChild(currentImg);

    })}



        document.querySelector("#single-art").appendChild(copy);

    };


