import './index.css';

//https://restcountries.eu/rest/v2/name/{name}
fetch('https://restcountries.eu/rest/v2/name/Ukraine').then(responce => {
  return responce.json();
})
.then(country => {
  console.log(country);
});
