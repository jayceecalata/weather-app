import './assets/style.css';
import handleSearch from './logic/handler';

// if (process.env.NODE_ENV !== 'production') {
//   console.log("Hello, you're in development mode!");
// }

document.getElementById('js-search').addEventListener('search', handleSearch);
