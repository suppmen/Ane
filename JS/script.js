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

//        const template = document.querySelector("template").content;
//
//        const copy = template.cloneNode(true);
//
//        copy.querySelector('.event-title').textContent = art.title.rendered;
//        copy.querySelector('.artCat').textContent = art._embedded["wp:term"][1][0].name;
//        copy.querySelector('.gallery-name').textContent = art.gallery_name;
//        copy.querySelector('.artist-name').textContent = art.artist_name;
//
//        copy.querySelector('.event-adress').textContent = art.address;
//
//
//
//
//        document.querySelector(".cards-wrapper").appendChild(copy);

    });


}
