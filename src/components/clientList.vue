<script setup>
    import { clientList } from '../router/store'
    import Swiper from 'swiper'
    import 'swiper/swiper-bundle.css'
    import { onMounted } from 'vue'
    import { Autoplay } from 'swiper/modules'

    Swiper.use([Autoplay])
    
    onMounted(() => {
        const swiperSlide = new Swiper('.client-slide-box', {
            loop: true,
            slidesPerView: 6, // Number of slides per view
            spaceBetween: 30, // Space between slides (optional)
            autoplay: {
                delay: 2000, // Autoplay delay in milliseconds
                disableOnInteraction: false, // Allow user interaction to stop autoplay
            },

        })
    })
</script>
<template>
    <div class="container content">
        <div class="row title">
            <h1>Our Client</h1>
            <span class="title-underline"></span>
        </div>
        <div class="swiper-container client-slide-box">
            <div class="swiper-wrapper">
                <div v-for="client in clientList" class="swiper-slide">
                    <img :src="client" alt="">
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .content{
        margin-bottom: 70px;
    }
    .content h1{
        margin-top: 30px;
        text-align: center;
        font-size: 25px;
        margin-bottom: 5px;
    }
    .content .title-underline{
        width: 5%;
        height: 2px;
        background-color: green;
        margin: auto;
        border-radius: 50px;
    }
    
    .swiper-container {
        margin-top: 20px;
        overflow: hidden;
    }
    
    .swiper-slide img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
</style>