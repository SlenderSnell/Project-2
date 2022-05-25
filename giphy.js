const apikey = "BJMBunRucto16Ju2jTjBVXAQCaH414VW";
const button = document.getElementById('goButton');
const search = document.getElementById('search');
const out = document.getElementById('out');

button.addEventListener('click', e => {
    let input = search.value;
    let url = `http://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${input}&limit=8`;
    fetch(url).then(function(res){
        return res.json()
    }).then(function(info){
        let gifArray = info.data
        for(let i=0;i<gifArray.length;i++){
            let gifURL = gifArray[i].images.fixed_height_small.url;
            let newImg = document.createElement('img');
            newImg.setAttribute('src', gifURL);
            out.appendChild(newImg);
        }
    }).catch(function(error){
        console.log(error)
    })
})