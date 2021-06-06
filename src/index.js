import './index.css';
import API from './js/fetchCountries.js';
import countryCard from './templates/countryCard.hbs';
import countriesList from './templates/countriesList.hbs';

import { alert, defaultModules } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import * as PNotifyBootstrap4 from '@pnotify/bootstrap4';
import '@pnotify/bootstrap4/dist/PNotifyBootstrap4.css';

defaultModules.set(PNotifyBootstrap4, {});

//const debounce = require('lodash.debounce');

const refs = {
  debounce: require('lodash.debounce'),
  cardContainer: document.querySelector('.js-card-container'),
  inputSearch: document.querySelector('.js-input-search')
};

refs.inputSearch.addEventListener('input', refs.debounce(onInputSearch, 500));

function onInputSearch(e) {
  e.preventDefault();

  const searchQuery = e.target.value;
  console.log(searchQuery);
  if (searchQuery.length === 0) {
    return refs.cardContainer.innerHTML = '';
    
  }
  API.fetchCountry(searchQuery)
    .then(renderCountryCard)
    .catch(onFetchError);
    //.finally(() => );
}

function renderCountryCard(country) {
  //console.log(country);
  if (country.length > 10) {
    alert('Too many matches found. Please enter a more specific query!');
  }
  else if (country.length >=2 && country.length <= 10) {
    const countriesMarkup = countriesList(country);
    refs.cardContainer.innerHTML = countriesMarkup;
  }
  else if (country.length === 1) {
    const markup = countryCard(...country);
    //console.log(markup);
    refs.cardContainer.innerHTML = markup;
  }
}

function onFetchError(error) {
  alert('Something is wrong! Try again!');
}