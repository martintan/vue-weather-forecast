
// Reference for the following JSON keys: https://openweathermap.org/current#current_JSON
export interface IForecast {
  // Datetime in Epoch format (e.g. 1625140800)
  dt: number;
  // Temperature in Fahrenheit
  main: {
    temp: number;
    pressure: number;
    humidity: number;
  };
  weather: {
    main: string;
    description: string;
  }[];
}