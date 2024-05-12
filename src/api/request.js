import urlConstants from './url-constants';

function createUrl(someString) {
  const { base, method, parameters } = urlConstants;
  parameters.q = someString;
  let string = base + method;
  Object.entries(parameters).forEach(([key, value], index) => {
    const symbol = index < 1 ? '?' : '&';
    string = string.concat(`${symbol}${key}=${value}`);
  });
  return string;
}

export default async function request(searchValue) {
  const url = createUrl(searchValue);
  const response = await fetch(url);
  const json = await response.json();
  return json;
}
