import observable from '../logic/observable';
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

export default async function request(userSuppliedValue) {
  try {
    const url = createUrl(userSuppliedValue);
    const response = await fetch(url);
    if (response.ok) {
      const json = await response.json();
      observable.notify(json);
    } else {
      switch (response.status) {
        case 400:
          alert('No such location, please enter a valid one.');
          break;
        case 403:
          alert('Exceeded quota or invalid key.');
          break;
        default:
          alert('Internal application error.');
      }
    }
  } catch (error) {
    alert('Something went wrong, please try again.');
  }
}
