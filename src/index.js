import './index.css';
//import API from './js/fetchCountries.js';
import countryCard from './templates/countryCard.hbs';
//import countriesList from './templates/countriesList.hbs';

const refs = {
  cardContainer: document.querySelector('.js-card-container')
}

fetch('https://restcountries.eu/rest/v2/name/Canada').then(responce => {
  return responce.json();
})
.then(country => {
  console.log(country);
  const markup = countryCard(...country);
  console.log(markup);
  refs.cardContainer.innerHTML = markup;
})
.catch(error => {
  console.log(error);
});
