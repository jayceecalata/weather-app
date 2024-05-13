import request from '../api/request';

export default function handleSearch(event) {
  const userInput = event.target.value;
  if (userInput.trim()) {
    request(userInput);
  }
}
