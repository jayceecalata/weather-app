import request from '../api/request';

export default function handleSearch(someValue) {
  request(someValue).then((response) => console.log(response));
}
