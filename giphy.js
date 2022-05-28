const apikey = "BJMBunRucto16Ju2jTjBVXAQCaH414VW";
const button = document.getElementById('goButton');
const clear = document.getElementById('clear');
const search = document.getElementById('search');
const limitNum = document.getElementById('limitNum');
const out = document.getElementById('out');

button.addEventListener('click', e => {
    let input = search.value;
    let inputPlus = input.replace(" ", "+");
    let limit = limitNum.value;
    let url = `http://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${inputPlus}&limit=${limit}`;
    console.log(url);
    fetch(url).then(function(res){
        return res.json()
    }).then(function(info){
        console.log(info.meta)
        let gifArray = info.data
        for(let i=0;i<gifArray.length;i++){
            let gifURL = gifArray[i].images.fixed_height_small.url;
            let newImg = document.createElement('img');
            newImg.setAttribute('src', gifURL);
            newImg.classList.add('center');
            out.appendChild(newImg);
        }
        console.log('Images received')
    }).catch(function(error){
        console.log(error)
    })
})

clear.addEventListener('click', e => {
    out.innerHTML = "";
    console.log('Cleared images')
})