import './index.css';
import API from './js/fetchCountries.js';
import countryCard from './templates/countryCard.hbs';
import countriesList from './templates/countriesList.hbs';
import { alert } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

const refs = {
  debounce: require('lodash.debounce'),
  cardContainer: document.querySelector('.js-card-container'),
  inputSearch: document.querySelector('.js-input-search')
};

refs.inputSearch.addEventListener('input', refs.debounce(onInputSearch, 500));

function onInputSearch(e) {
  e.preventDefault();
  const searchQuery = e.target.value;

  if (searchQuery.length === 0) {
    refs.cardContainer.innerHTML = '';
    return;
  }
  API.fetchCountry(searchQuery)
    .then(renderCountryCard)
    .catch(onFetchError);
}

function renderCountryCard(country) {
  if (country.length > 10) {
    alert('Too many matches found. Please enter a more specific query!');
  }
  else if (country.length >=2 && country.length <= 10) {
    const countriesMarkup = countriesList(country);
    refs.cardContainer.innerHTML = countriesMarkup;
  }
  else if (country.length === 1) {
    const markup = countryCard(...country);
    refs.cardContainer.innerHTML = markup;
  }
}

function onFetchError(error) {
  alert('Something is wrong! Try again!');
}