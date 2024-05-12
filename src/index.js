import './assets/style.css';

// if (process.env.NODE_ENV !== 'production') {
//   console.log("Hello, you're in development mode!");
// }

import request from './api/request';

request('Manila').then((response) => {
  console.log(response);
});
