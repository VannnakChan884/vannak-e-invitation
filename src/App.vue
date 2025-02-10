<script setup>
import { useRouter } from 'vue-router';
import { onMounted } from 'vue';

const router = useRouter();

onMounted(() => {
  // 🔒 Disable Right Click
  document.addEventListener("contextmenu", (event) => event.preventDefault());

  // 🔒 Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
  document.addEventListener("keydown", (event) => {
    if (
      event.key === "F12" ||
      (event.ctrlKey && event.shiftKey && (event.key === "I" || event.key === "J")) ||
      (event.ctrlKey && event.key === "U")
    ) {
      event.preventDefault();
    }
  });

  // 🔒 Detect DevTools Every 3 Seconds
  setInterval(() => {
    const before = new Date().getTime();
    debugger; // This line will stop the script if DevTools is open
    const after = new Date().getTime();
    
    if (after - before > 100) {
      alert("🚨 Developer tools detected! Access denied.");
      window.location.href = "about:blank"; // Redirect to a blank page
    }
  }, 3000);

  if (window.location.pathname !== '/') {
    router.push('/'); // Redirect to Home if refreshed
  }
});

</script>
<template>
  <RouterView />
</template>