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
