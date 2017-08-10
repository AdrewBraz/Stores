import axios from 'axios';
import dompurify from 'dompurify';

function searchResults(stores){
  return stores.map(store => {
    return `
      <a href="/store/${store.slug}" class="search__result">
        <strong>${store.name}</strong>
      </a>
    `
  }).join('')
}

export default function type(search){
  if(!search) return;

  const searchInput = document.querySelector("input[name='search']");
  const searchResult = document.querySelector('.search__results');


  searchInput.addEventListener('input', function(){
    if(!this.value){
      searchResult.style.display = 'none';
      return;
    }
    searchResult.style.display = 'block';

    axios
      .get(`/api/search?q=${this.value}`)
      .then(res => {
        if(res.data.length){
          searchResult.innerHTML = dompurify.sanitize(searchResults(res.data));
          return;
        }
        searchResult.innerHTML = dompurify.sanitize(`<div class="search__result"> No results for ${this.value}</div>`)
      })
      .catch(err => console.error(err))
  })

  searchInput.addEventListener('keyup', (e) => {
    if (![38, 40, 13].includes(e.keyCode)) {
      return;
    }
    const activeClass = 'search__result--active';
    const current = search.querySelector(`.${activeClass}`);
    const items = search.querySelectorAll('.search__result');
    let next;
    if (e.keyCode === 40 && current) {
      next = current.nextElementSibling || items[0];
    } else if (e.keyCode === 40) {
      next = items[0];
    } else if (e.keyCode === 38 && current) {
      next = current.previousElementSibling || items[items.length - 1]
    } else if (e.keyCode === 38) {
      next = items[items.length - 1];
    } else if (e.keyCode === 13 && current.href) {
      window.location = current.href;
      return;
    }
    if (current) {
      current.classList.remove(activeClass);
    }
    next.classList.add(activeClass);
  });
}