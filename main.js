let query = 'day';
let imageUrl = `https://api.unsplash.com/search/photos?query=${query}&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo&per_page=18`;
const input = document.querySelector('.input');
const search = document.querySelector('.search-img');
const allImageBoxes = document.querySelectorAll('.item');

async function getData(){
    const res = await fetch(imageUrl);
    const data = await res.json();
    let i = 0;
    allImageBoxes.forEach( el => {
        el.style.background = `url(${data.results[i].urls.regular})`;
        i++;
    });
}
getData();

function changeQuery(){
    let inputText = input.value;
    query = inputText;
    imageUrl = `https://api.unsplash.com/search/photos?query=${query}&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo&per_page=18`;
    getData();
}
search.addEventListener('click', changeQuery);

