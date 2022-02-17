

// According to Auth0 discussion, these are considered to be non-confidential so 
// we can just export them from here
export const AUTH0_DOMAIN = 'dev-npqr2qml.us.auth0.com';
export const AUTH0_CLIENT_ID = 'GLK9etjOTQ4XHF5BF4bxncXXy6mT06FX';

// This is the session storage key for storing the token returned
// by the Auth0 login popup.
export const AUTH0_SESSION_STORAGE_KEY = 'wf-auth0-token';

export const OPEN_WEATHER_API_KEY = process.env.VUE_APP_OPEN_WEATHER_API_KEY;

export const LANDING_TEXT =
  'Welcome to the weather forecast web application. Please login with your Github user to use the application and view the weather in your city.';
