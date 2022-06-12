const apikey = "BJMBunRucto16Ju2jTjBVXAQCaH414VW";
const button = document.getElementById('goButton');
const clear = document.getElementById('clear');
const search = document.getElementById('search');
const limitNum = document.getElementById('limitNum');
const out = document.getElementById('out');

const searchBtn = document.getElementById('searchBtn');
const searchBox = document.getElementById('searchBox');
const aboutBtn = document.getElementById('aboutBtn');
const aboutBox = document.getElementById('aboutBox');
const contactBtn = document.getElementById('contactBtn');
const contactBox = document.getElementById('contactBox');

// tab functionality
searchBtn.addEventListener('click', e => {
    aboutBox.classList.remove('active');
    contactBox.classList.remove('active');
    searchBox.classList.add('active');
})
aboutBtn.addEventListener('click', e => {
    searchBox.classList.remove('active');
    contactBox.classList.remove('active');
    aboutBox.classList.add('active');
})
contactBtn.addEventListener('click', e => {
    searchBox.classList.remove('active');
    aboutBox.classList.remove('active');
    contactBox.classList.add('active');
})

// gif finder functionality
button.addEventListener('click', e => {
    let input = search.value;
    let inputPlus = input.replace(" ", "+");
    let limit = limitNum.value;
    let offset = Math.floor(Math.random() * 51);
    let url = `http://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${inputPlus}&limit=${limit}&offset=${offset}`;
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
            newImg.style.padding = "5px 0px";
            newImg.classList.add('center');
            out.appendChild(newImg);
        }
        console.log('Images received')
    }).catch(function(error){
        console.log(error)
    })
})

// clear gifs
clear.addEventListener('click', e => {
    out.innerHTML = "";
    console.log('Cleared images')
})