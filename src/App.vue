<script setup>
import { useRouter } from 'vue-router';
import { ref,onMounted } from 'vue';

const router = useRouter();

const isPlaying = ref(false);
const audio = new Audio('/Noly_Record.mp3'); // Replace with your actual audio file

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