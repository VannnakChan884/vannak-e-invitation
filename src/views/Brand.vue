<script setup>
import { clientList } from "../router/store";
import GoToTop from '../components/GoToTop.vue'
import Footer from '../components/Footer.vue'
</script>
<template>
    <div class="container-fluid page-heading">
        <div class="container page-title">
            <h1>ទំព័រអតិថិជន</h1>
            <h3 style="font-size: 18px;">Brand</h3>
        </div>
    </div>
    <div class="container mt-5 brand-container">
        <div class="row about-title-heading">
            <div class="col-md-12 col-12">
                <h2 class="heading-title">MY Clients</h2>
                <p class="title-underline"></p>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col-lg-2 col-md-3 col-sm-4 col-4" v-for="(logo, i) in clientList" :key="i">
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
.page-heading {
    height: 250px;
    background-color: green;
    margin-top: -125px;
}

.page-title {
    padding-top: 150px;
    color: #fff;
}

.brand-container{
    margin-bottom: 150px;
}

.about-title-heading {
    width: 100%;
    text-align: center;
    margin-bottom: 20px;
}

.about-title-heading .heading-title {
    text-transform: uppercase;
    font-size: 25px;
    margin-bottom: 5px;
    font-weight: 600;
}

.about-title-heading .title-underline {
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
    overflow: hidden;
}

.client-logo-card .client-logo {
    width: 100%;
    height: 100%;
    object-fit: contain;
    margin: 10px;
    border-radius: 7%;
}

/* Responsive by devices */

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width:1200px) {}

/* Large devices (desktops, 992px and up) */
@media (min-width:992px) and (max-width: 1199.98px) {}

/* Medium devices (tables, 768px and up) */
@media (min-width: 768px) and (max-width: 991.98px) {}

/* Small devices(landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 767.98px) {}

/* Extra small devices(portrait phones, less than 576px) */
@media (max-width: 575.98px) {
    .page-heading{
        height: 210px;
    }
    .page-title h1{
        font-size: 20px;
    }
    .page-title h3{
        font-size: 15px !important;
    }
    .brand-container{
        margin-top: 20px !important;
    }
    .about-title-heading {
        margin-bottom: 0 ;
    }
    .about-title-heading .title-underline {
        width: 25%;
        height: 5px;
    }
}
</style>