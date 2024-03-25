<script setup>
import { onMounted } from "vue";
import { slides } from "../router/store.js";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import { EffectFade, Navigation, Pagination } from "swiper/modules";

Swiper.use([EffectFade, Pagination, Navigation]);

onMounted(() => {
  const swiperSlideTop = new Swiper(".top-slide", {
    loop: true, // Enable loop mode
    autoplay: {
      delay: 10000, // Autoplay delay in milliseconds
      disableOnInteraction: false,
    },
    effect: "fade",
    fadeEffect: {
      crossFade: true, // Enable cross fade
    },
    pagination: {
      el: ".swiper-pagination", // Pagination container
      dynamicBullets: true,
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-btn-next",
      prevEl: ".swiper-btn-back",
    },
  });
});
</script>
<template>
  <div class="container">
    <div class="swiper-container top-slide">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(slide, i) in slides" :key="i">
          <img :src="slide" alt="">
        </div>
      </div>
      <div class="swiper-btn-back">
        <i class="fa-solid fa-angle-left"></i>
      </div>
      <div class="swiper-btn-next">
        <i class="fa-solid fa-angle-right"></i>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>
<style scoped>
.container {
  margin-bottom: 20px;
  overflow: hidden;
}

.top-slide {
  position: relative;
  background-color: red;
  width: 100%;
  height: 500px;
}

.top-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper-pagination {
  position: absolute;
  bottom: 20px !important;
  left: 50%;
  transform: translate(-50%) !important;
  z-index: 1;
}

::v-deep .swiper-pagination-bullet-active {
  background-color: green;
}

.swiper-btn-back,
.swiper-btn-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 15%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 1;
  transition: 0.2s all ease;
  opacity: 0;
}

.swiper-btn-back {
  left: 0;
  background: linear-gradient(to right, rgba(0, 128, 0, 0.35), rgba(255, 255, 255, 0));
}

.swiper-btn-next {
  right: 0;
  background: linear-gradient(to left, rgba(0, 128, 0, 0.35), rgba(255, 255, 255, 0));
}

.swiper-btn-back i,
.swiper-btn-next i {
  color: #fff;
  font-size: 20px;
  padding: 10px;
  border-radius: 100%;
  background-color: green;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.top-slide:hover .swiper-btn-back,
.top-slide:hover .swiper-btn-next {
  opacity: 1;
}
</style>
