let apikey = "BJMBunRucto16Ju2jTjBVXAQCaH414VW";
document.addEventListener("DOMContentLoaded", init);
function init(){
    document.getElementById("goButton").addEventListener('click', e => {
        e.preventDefault();
        let url = `http://api.giphy.com/v1/gifs/search?api=${apikey}&limit=8&q=`;
        let str = document.getElementById("search").value.trim();
        url = url.concat(str);
        console.log(url);
    })
}