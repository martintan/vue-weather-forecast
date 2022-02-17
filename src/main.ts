import { createApp } from 'vue';
import App from './App.vue';
import { AUTH0_CLIENT_ID, AUTH0_DOMAIN } from './constants';
import './index.css';
import router from './router';
import { Auth0 } from './utils/auth';

(async () => {
  console.log('Initializing Auth0');
  const Auth0Plugin = await Auth0.init({
    onRedirectCallback: (appState) => {
      router.push(
        appState && appState.targetUrl
          ? appState.targetUrl
          : window.location.pathname
      );
    },
    clientId: AUTH0_CLIENT_ID,
    domain: AUTH0_DOMAIN,
    audience: '',
    redirectUri: window.location.origin,
  });

  console.log('Finished initalizing Auth0');
  createApp(App).use(router).use(Auth0Plugin).mount('#app');
})();
