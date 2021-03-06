const BASE_URL = 'https://restcountries.eu/rest/v2';

function fetchCountries(countryName) {
  return fetch(`${BASE_URL}/name/${countryName}`).then(responce => {
    if (responce.ok) {
      return responce.json(); 
    }   
  },
  );
}

export default { fetchCountries };