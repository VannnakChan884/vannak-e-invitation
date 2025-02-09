<script setup>
import { useRouter } from 'vue-router';
import { ref,onMounted } from 'vue';

const router = useRouter();

const isPlaying = ref(false);
const audio = new Audio('/Noly_Record.mp3');

// Ensure autoplay works on mobile after user interaction
const enableAutoplay = () => {
  audio.play().then(() => {
    isPlaying.value = true;
  }).catch(() => {
    console.warn("Autoplay blocked. User needs to click to play audio.");
    isPlaying.value = false; // Prevent console errors
  });
};

// Function to toggle audio
const toggleAudio = () => {
  if (isPlaying.value) {
    audio.pause();
    isPlaying.value = false;
  } else {
    audio.play();
    isPlaying.value = true;
  }
};

// Auto-play audio when page loads
onMounted(() => {
  audio.play().then(() => {
    isPlaying.value = true;
  }).catch(() => {
    isPlaying.value = false; // Prevent errors if autoplay is blocked
  });
});

// Run autoplay after the first user click
onMounted(() => {
  document.addEventListener("click", enableAutoplay, { once: true }); // Mobile browsers need user interaction
});

// Expose isPlaying & toggleAudio for all pages

onMounted(() => {
  if (window.location.pathname !== '/') {
    router.push('/'); // Redirect to Home if refreshed
  }
});
</script>
<template>
  <RouterView :isPlaying="isPlaying" :toggleAudio="toggleAudio" />
</template>