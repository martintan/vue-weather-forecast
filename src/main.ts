import { createApp } from 'vue';
import App from './App.vue';
import { auth0ClientId, auth0Domain } from './constants';
import './index.css';
import router from './router';
import { store } from './store';
import { Auth0 } from './utils/auth';

(async () => {
  const Auth0Plugin = await Auth0.init({
    onRedirectCallback: (appState) => {
      router.push(
        appState && appState.targetUrl
          ? appState.targetUrl
          : window.location.pathname
      );
    },
    clientId: auth0ClientId,
    domain: auth0Domain,
    audience: '',
    redirectUri: window.location.origin,
  });

  createApp(App).use(router).use(store).use(Auth0Plugin).mount('#app');
})();
