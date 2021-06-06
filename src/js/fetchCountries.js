const BASE_URL = 'https://restcountries.eu/rest/v2';

function fetchCountry(countryName) {
  return fetch(`${BASE_URL}/name/${countryName}`).then(responce => {
    if (!responce.ok) {
      return error;
    }
    return responce.json(); 
  },
  );
}

export default { fetchCountry };