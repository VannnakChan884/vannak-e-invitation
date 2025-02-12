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
  navigator.serviceWorker.register('/service-worker.js')
    .then((registration) => {
      console.log('Service Worker registered with scope:', registration.scope);
      
      registration.addEventListener('updatefound', () => {
        const newWorker = registration.installing;
        newWorker.addEventListener('statechange', () => {
          if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
            if (confirm('A new update is available! Do you want to refresh?')) {
              window.location.reload();
            }
          }
        });
      });

    }).catch((error) => {
      console.error('Service Worker registration failed:', error);
    });
}

// Alert user when offline or online
window.addEventListener('offline', () => {
  alert("You are now offline. Please check your internet connection.");
});

window.addEventListener('online', () => {
  alert("You are back online.");
});