<script setup>
import { useRouter } from 'vue-router';
import { onMounted } from 'vue';

const router = useRouter();

onMounted(() => {
  if (window.location.pathname !== '/') {
    router.push('/'); // Redirect to Home if refreshed
  }
});
</script>
<template>
  <RouterView />
</template>
