import './index.css';
//import API from './js/fetchCountries.js';
import countryCard from './templates/countryCard.hbs';
//import countriesList from './templates/countriesList.hbs';
var debounce = require('lodash.debounce');

const refs = {
  cardContainer: document.querySelector('.js-card-container'),
  inputSearch: document.querySelector('.js-input-search')
};

refs.inputSearch.addEventListener('input', debounce(onInputSearch, 500));

function onInputSearch(e) {
  e.preventDefault();

  const searchQuery = e.target.value;
  console.log(searchQuery);

  fetchCountry(searchQuery)
    .then(renderCountryCard)
    .catch(error => console.log(error));
}

function fetchCountry(countryName) {
  return fetch(`https://restcountries.eu/rest/v2/name/${countryName}`).then(responce => {
    return responce.json(); 
  },
  );
}

function renderCountryCard (country) {
  const markup = countryCard(...country);
  refs.cardContainer.innerHTML = markup;
}

