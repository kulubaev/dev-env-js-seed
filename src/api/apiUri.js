export default function baseUrl() {
  return extractQueryStringParamater('mockApi') ? 'http://localhost:5001/': '/';
}


// borrowed from stackoverfllow
function extractQueryStringParamater(name, url) {
  if(!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&'); //eslint-disable-line no-useless-escape

  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');

  var results = regex.exec(url);
  if(!results) return null;
  if(!results[2]) return '';

  return decodeURIComponent(results[2].replace(/\+/g, ' '));



}
