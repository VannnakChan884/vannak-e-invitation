<script setup>
import { clientList } from "../router/store";
import GoToTop from '../components/GoToTop.vue'
import Footer from '../components/Footer.vue'
</script>
<template>
    <div class="container-fluid" style="height: 250px;background-color: green;margin-top: -125px;">
        <div class="container" style="padding-top: 150px; color: #fff;">
            <h1>ទំព័រអតិថិជន</h1>
            <h3 style="font-size: 18px;">Brand</h3>
        </div>
    </div>
    <div class="container mt-5" style="margin-bottom: 150px;">
        <div class="row about-detail mb-5">
            <div class="col-md-12 col-12">
                <h2 class="heading-title">MY Clients</h2>
                <p class="title-underline"></p>
            </div>
        </div>
        <div class="row">
            <div class="col-md-2 col-sm-3 col-4" v-for="(logo, i) in clientList" :key="i">
                <div class="client-logo-card">
                    <img :src="logo" alt="" class="client-logo">
                </div>
            </div>
        </div>
    </div>
    <GoToTop />
    <Footer />
</template>
<style scoped>
.about-detail {
    width: 100%;
    text-align: center;
    margin-bottom: 20px;
}

.about-detail .heading-title {
    text-transform: uppercase;
    font-size: 25px;
    margin-bottom: 5px;
    font-weight: 600;
}

.about-detail .title-underline {
    width: 5%;
    height: 2px;
    background-color: green;
    border-radius: 50px;
    margin: auto;
}

.client-logo-card {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 230px;
}

.client-logo-card .client-logo {
    width: 100%;
    height: 100%;
    object-fit: contain;
    margin: 10px;
}
</style>