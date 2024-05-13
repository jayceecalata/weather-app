import './assets/style.css';
import handleSearch from './logic/handler';
import observable from './logic/observable';
import { updateForecastPane, updatePresentPane } from './logic/display';

// if (process.env.NODE_ENV !== 'production') {
//   console.log("Hello, you're in development mode!");
// }

document.getElementById('js-search').addEventListener('search', handleSearch);

observable.subscribe(updatePresentPane);
observable.subscribe(updateForecastPane);
