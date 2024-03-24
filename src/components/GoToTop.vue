<script setup>
    import { ref, onMounted, onBeforeUnmount } from "vue";

    const isVisible = ref(false);
    const handleScroll = () => {
        isVisible.value = window.scrollY > 0;
    };
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth", // Smooth scrolling animation
        });
        isVisible.value = false; // Hide the button after clicking
    };

    onMounted(() => {
        window.addEventListener('scroll', handleScroll);
    });
    onBeforeUnmount(() => {
        window.removeEventListener('scroll', handleScroll);
    });
</script>
<template>
    <div>
        <button @click="scrollToTop" v-show="isVisible" class="scroll-to-top-btn">
            <i class="fa-solid fa-angle-up"></i>
        </button>
    </div>
</template>

<style scoped>
    .scroll-to-top-btn {
        width: 60px;
        height: 60px;
        position: fixed;
        bottom: 4%;
        left: 2%;
        background-color: green;
        border: none;
        border-radius: 100%;
        cursor: pointer;
        z-index: 100;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .scroll-to-top-btn i{
        font-size: 30px;
        color: #fff;
    }
</style>
