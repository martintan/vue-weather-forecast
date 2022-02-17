import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// Initialize Tailwind
import './index.css';

createApp(App).use(router).mount('#app')
