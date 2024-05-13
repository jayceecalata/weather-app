import request from '../api/request';
import observable from './observable';

export default function handleSearch(event) {
  const userInput = event.target.value;
  if (userInput.trim()) {
    request(userInput).then((response) => observable.notify(response));
  }
}
