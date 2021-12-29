const scrape = require('./../index');
const product = scrape('32958933105');

product.then((res) => {
  console.log('The JSON: ', res);

  document.body.innerHTML = '<h1>Data ' + res + '</h1>';
});
