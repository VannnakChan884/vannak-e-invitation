import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './registerServiceWorker'
import 'shepherd.js/dist/css/shepherd.css'

const app = createApp(App)

app.use(router)

app.mount('#app')

AOS.init({})

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then((registration) => {
        console.log('Service Worker registered with scope:', registration.scope);
      })
      .catch((error) => {
        console.error('Service Worker registration failed:', error);
      });
  });
}

window.addEventListener('offline', () => {
  alert("You are now offline. Please check your internet connection.");
});

window.addEventListener('online', () => {
  alert("You are back online.");
});

  