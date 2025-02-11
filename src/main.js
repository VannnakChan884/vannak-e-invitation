import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './registerServiceWorker'
import { ref, onMounted } from "vue";

const app = createApp(App)

const installPrompt = ref(null);

app.use(router)

app.mount('#app')

AOS.init({})

onMounted(() => {
    window.addEventListener("beforeinstallprompt", (event) => {
      event.preventDefault(); // Stop the default browser install popup
      installPrompt.value = event;
  
      // Auto-show an install prompt after 3 seconds
      setTimeout(() => {
        showInstallPrompt();
      }, 3000);
    });
});
  
const showInstallPrompt = () => {
    if (installPrompt.value) {
      installPrompt.value.prompt(); // Show the install popup
      installPrompt.value.userChoice.then((choice) => {
        if (choice.outcome === "accepted") {
          console.log("User accepted the install prompt");
        } else {
          console.log("User dismissed the install prompt");
        }
        installPrompt.value = null;
      });
    }
};