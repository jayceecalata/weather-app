import { format } from 'date-fns';

function formatDayDate(date) {
  return format(date, 'E, d MMM');
}

function formatDayOnly(date) {
  return format(date, 'E');
}

function updatePresentPane(json) {
  const pane = document.getElementById('js-present');
  const location = pane.querySelector('span:nth-child(1)');
  const date = pane.querySelector('span:nth-child(2)');
  const actualTemperature = pane.querySelector('span:nth-child(3)');
  const feelsTemperature = pane.querySelector('span:nth-child(4)');
  const condition = pane.querySelector('span:nth-child(5)');
  location.textContent = `${json.location.name}, ${json.location.country}`;
  date.textContent = formatDayDate(json.location.localtime);
  actualTemperature.textContent = `${json.current.temp_c}°C`;
  feelsTemperature.textContent = `feels like ${json.current.feelslike_c}°C`;
  condition.textContent = json.current.condition.text;
}

function updateForecastPane(json) {
  const days = document.querySelectorAll('#js-forecast .days');
  days.forEach((day, i) => {
    const date = day.querySelector('span:nth-child(1)');
    const minTemperature = day.querySelector('span:nth-child(2)');
    const maxTemperature = day.querySelector('span:nth-child(4)');
    const condition = day.querySelector('span:nth-child(5)');
    const container = json.forecast.forecastday[i];
    date.textContent = formatDayOnly(container.date);
    minTemperature.textContent = `${container.day.mintemp_c}°C`;
    maxTemperature.textContent = `${container.day.maxtemp_c}°C`;
    condition.textContent = container.day.condition.text;
  });
}

export { updatePresentPane, updateForecastPane };
