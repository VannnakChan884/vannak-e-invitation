<script setup>
    import { onMounted } from 'vue'
    import { achievementList } from '../router/store.js'
    import Swiper from 'swiper'
    import 'swiper/swiper-bundle.css'
    import { Autoplay, Navigation } from 'swiper/modules'

    Swiper.use([Autoplay, Navigation])

    onMounted(() => {
        const swiper = new Swiper('.swiper-achievement', {
            loop: true,
            slidesPerView: 4, // Number of slides per view
            spaceBetween: 30, // Space between slides (optional)
            autoplay: {
                delay: 10000, // Autoplay delay in milliseconds
                disableOnInteraction: false, // Allow user interaction to stop autoplay
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        })
    })
</script>
<template>
    <div class="container">
        <div class="achievement-heading">
            <h2 class="heading-title">Achievements</h2>
            <RouterLink to="/achievement" class="see-more"><span>See more</span>
                <i class="fa-solid fa-angle-right"></i></RouterLink>
        </div>
        <div class="swiper-main">
            <div class="swiper-achievement">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="(achievement, i) in achievementList" :key="i">
                        <div class="achievement-card">
                            <div class="acheivement-card-img">
                                <a class="acheivement-card-link">
                                    <img :src="achievement.img" alt="">
                                </a>
                            </div>
                            <div class="acheivement-card-content">
                                <h2 class="mb-2">{{achievement.brand}}</h2>
                                <ul>
                                    <li>
                                        <span class="detail-titlle">QTY</span>
                                        <span>:</span>
                                        <p>60posters</p>
                                    </li>
                                    <li>
                                        <span class="detail-titlle">Confirmed</span>
                                        <span>:</span>
                                        <p class="mb-2">20posters</p>
                                    </li>
                                    <li>
                                        <span class="detail-titlle">Created date</span>
                                        <span>:</span>
                                        <p>January 01, 2024</p>
                                    </li>
                                    <li>
                                        <span class="detail-titlle">Closing date</span>
                                        <span>:</span>
                                        <p class="text-danger">March 19, 2024</p>
                                    </li>
                                </ul> 
                            </div>
                            <div class="acheivement-card-footer">
                                <div class="designer" v-for="(designer, index) in achievement.designers" :key="index">
                                    <a>{{ designer }}</a>
                                </div>
                            </div>
                        </div>
                        <div class="group-type">
                            <span>{{ achievement.type }}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="swiper-button-prev">
                <i class="fa-solid fa-angle-left"></i>
            </div>
            <div class="swiper-button-next">
                <i class="fa-solid fa-angle-right"></i>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .container{
        margin-bottom: 40px;
        margin-top: 40px;
    }
    .container .achievement-heading{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }
    .container .achievement-heading .see-more{
        text-decoration: none;
        color: #333;
        font-size: 20px;
        cursor: pointer;
        padding: 5px 0 5px 0;
        display: flex;
        align-items: center;
        gap: 15px;
    }
    .container .achievement-heading .see-more span{
        font-size: 20px;
    }
    .container .achievement-heading .see-more i{
        font-size: 18px;
        color: green;
    }
    .container .swiper-main{
        width: 100%;
        position: relative;
    }
    .container .swiper-main .swiper-achievement{
        overflow: hidden;
        border-radius: 20px;
        padding: 5px 0 5px 0;
    }
    .container .swiper-main .achievement-card{
        /* width: 300px; */
        height: 450px;
        background-color: #f9f9f9;
        border-radius: 20px;
        overflow: hidden;
        position: relative;
    }
    .container .swiper-main .achievement-card:hover{
        box-shadow: 1px 2px 4px rgba(0, 128, 0, 0.3);
    }
    .container .swiper-main .achievement-card .acheivement-card-img{
        width: 100%;
        height: 200px;
        background-color: orange;
        /* border-radius: 20px; */
        overflow: hidden;
        cursor: pointer;
    }
    .container .swiper-main .achievement-card .acheivement-card-img img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .container .swiper-main .achievement-card .acheivement-card-content{
        padding: 10px;
    }
    .container .swiper-main .achievement-card .acheivement-card-content h2{
        font-size: 22px;
    }
    .container .swiper-main .achievement-card .acheivement-card-content ul li{
        display: flex;
        align-items: center;
    }
    .container .swiper-main .achievement-card .acheivement-card-content ul li .detail-titlle{
        width: 37%;
        display: table-cell;
    }
    .container .swiper-main .achievement-card .acheivement-card-content ul li span{
        width: 10%;
    }
    .container .swiper-main .achievement-card .acheivement-card-content ul li p{
        width: 53%;
        display: table-cell;
    }

    .swiper-button-prev, .swiper-button-next{
        z-index: 1;
    }
    .swiper-button-prev::after, .swiper-button-next::after {
        content: "";
    }

    .swiper-button-prev i, .swiper-button-next i {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 40px;
        height: 40px;
        font-size: 22px;
        color: green;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        border-radius: 100%;
    }

    .swiper-button-prev {
        left: -3%;
    }

    .swiper-button-next {
        right: -3%;
    }
    .acheivement-card-footer{
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 10px;
    }
    .acheivement-card-footer .designer a{
        color: green;
        font-size: 10px;
        font-weight: 400;
        text-transform: uppercase;
        text-decoration: none;
        padding: 2px 10px;
        background-color: rgba(0, 128, 0, 0.1);
        text-align: center;
        border-radius: 20px;
        transition: 0.3s ease-in-out;
        cursor: pointer;
    }
    .acheivement-card-footer .designer a:hover{
        background-color: green;
        color: #fff;
    }
    .swiper-slide .group-type{
        position: absolute;
        background-color: rgba(0, 128, 0, 0.5);
        top: 10px;
        left: 10px;
        padding: 3px 20px;
        text-align: center;
        margin: 0 20px 20px 0;
        border-radius: 20px;
    }
    .swiper-slide .group-type span{
        color: #fff;
        font-size: 15px;
        font-weight: 400;
        text-transform: uppercase;
    }
</style>