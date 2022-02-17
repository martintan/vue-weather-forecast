import { OPEN_WEATHER_API_KEY } from '@/constants';

// Units must be Imperial for the temperature to be in Fahrenheit
export const getForecastAPIUrl = (city: string, numDays: number) =>
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&cnt=${numDays}&units=imperial&appid=${OPEN_WEATHER_API_KEY}`;
