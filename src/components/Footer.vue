<script setup>
import { socialLinks } from "../router/store";
</script>
<template>
    <footer class="container-fluid">
        <div class="container footer-container">
            <div class="row">
                <div class="col-md-4 col-12 mb-4 footer-left">
                    <div class="footer-logo">
                        <a>
                            <img src="../assets/logo.png" alt="">
                        </a>
                    </div>
                    <p class="footer-slogain">My design achievement.</p>
                    <div class="footer-social-link">
                        <div class="row">
                            <div class="col-md-2 col-2 mb-4" v-for="(link, i) in socialLinks" :key="i">
                                <a :href="link.url" target="_blank">
                                    <i :class="['fa-brands', link.icon]"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-12 mb-5 spacing"></div>
                <div class="col-md-4 col-12 footer-right">
                    <div class="footer-contact">
                        <h3 class="footer-contact-title">My Contact</h3>
                        <div class="footer-contact-detail">
                            <ul>
                                <li>
                                    <i class="fa-solid fa-location-dot"></i>
                                    <span>#16, Street 01(8m), Phum Morl, Sangkat Dongkar, Khan Dongkar, Phnom Penh,
                                        Cambodia</span>
                                </li>
                                <li>
                                    <i class="fa-solid fa-phone"></i>
                                    <a>+855 61 282 408</a>
                                </li>
                                <li>
                                    <i class="fa-solid fa-envelope"></i>
                                    <a>vannakchan884@gmail.com</a>
                                </li>
                                <li>
                                    <i class="fa-solid fa-clock"></i>
                                    <span>Monday - Sunday<br>8:00am - 5:00pm </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-copyright">
                <span class="text-white">©2024 Chan Vannak. All Rights Reserved.</span>
            </div>
        </div>
    </footer>
</template>
<style scoped>
.container-fluid {
    border-top: 1px solid greenyellow;
    background-image: linear-gradient(white, green);
}

.footer-container {
    padding: 50px 0;
}

.container-fluid .footer-container .footer-logo {
    width: 21%;
    margin-bottom: 15px;
    cursor: pointer;
}

.container-fluid .footer-container .footer-logo img {
    height: 50px;
    object-fit: cover;
}

.container-fluid .footer-container .footer-slogain {
    font-size: 18px;
    margin-bottom: 15px;
    color: #333;
}

.container-fluid .footer-container .footer-social-link a {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    width: 50px;
    height: 50px;
}

.container-fluid .footer-container .footer-social-link a i {
    width: 100%;
    height: 100%;
    font-size: 28px;
    color: #fff;
    display: block;
    padding: 10px;
    border-radius: 50%;
    background-color: green;
    text-align: center;
}

.container-fluid .footer-container .footer-copyright {
    margin-top: 20px;
}

.footer-contact {
    width: 100%;
    color: #333;
}

.footer-contact .footer-contact-title {
    font-size: 22px;
    margin-bottom: 15px;
    font-weight: 600;
}

.footer-contact .footer-contact-detail {
    font-size: 18px;
}

.footer-contact .footer-contact-detail ul li {
    margin-bottom: 10px;
    display: flex;
    align-items: center;
}

.footer-contact .footer-contact-detail ul li i {
    padding: 0 25px 0 5px;
    width: 40px;
    display: table-cell;
    font-size: 22px;
}

.footer-contact .footer-contact-detail ul li a {
    cursor: pointer;
}

.footer-contact .footer-contact-detail ul li span {
    display: table-cell;
}

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width:1200px) {}

/* Large devices (desktops, 992px and up) */
@media (min-width:992px) and (max-width: 1199.98px) {
    .footer-left{
        width: 50%;
    }
    .spacing {
        display: none;
    }
    .footer-right{
        width: 50%;
    }
}

/* Medium devices (tables, 768px and up) */
@media (min-width: 768px) and (max-width: 991.98px) {
    .footer-left{
        width: 50%;
    }
    .spacing {
        display: none;
    }
    .footer-right{
        width: 50%;
    }
}

/* Small devices(landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 767.98px) {
    .footer-left{
        width: 50%;
    }
    .spacing {
        width: 0;
        display: none;
    }
    .footer-right{
        width: 50%;
    }
}

/* Extra small devices(portrait phones, less than 576px) */
@media (max-width: 575.98px) {
    .container-fluid {
        background-image: none;
        background-color: green;
    }

    .container-fluid .footer-container .footer-logo img {
        filter: invert(100%) brightness(200%);
    }

    .container-fluid .footer-container .footer-slogain {
        color: #fff;
    }

    .container-fluid .footer-container .footer-social-link a i {
        width: 100%;
        height: 100%;
        font-size: 28px;
        color: #fff;
        display: block;
        padding: 10px;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.2);
        text-align: center;
    }

    .spacing {
        display: none;
    }

    .footer-contact {
        color: #fff;
    }
}
</style>