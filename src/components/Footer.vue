<template>
    <footer class="container-fluid">
        <div class="container footer-container">
            <div class="row">
                <div class="col-md-4 col-12">
                    <div class="footer-logo">
                        <a>
                            <img src="./src/assets/logo.png" alt="">
                        </a>
                    </div>
                    <p class="footer-slogain">My design achievement.</p>
                    <div class="footer-social-link">
                        <a href="https://www.facebook.com/vannakchan4544/" target="_blank"><i class="fa-brands fa-facebook"></i></a>
                        <a href="https://www.tiktok.com/@vannakchan884" target="_blank"><i class="fa-brands fa-tiktok"></i></a>
                        <a href="https://www.instagram.com/vannakchan884/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
                        <a href="https://www.linkedin.com/in/chan-vannak/" target="_blank"><i class="fa-brands fa-linkedin-in"></i></a>
                        <a href="https://t.me/chanvannak408" target="_blank"><i class="fa-brands fa-telegram"></i></a>
                    </div>
                </div>
                <div class="col-md-4 col-12"></div>
                <div class="col-md-4 col-12">
                    <div class="footer-contact">
                        <h3 class="footer-contact-title">My Contact</h3>
                        <div class="footer-contact-detail">
                            <ul>
                                <li>
                                    <i class="fa-solid fa-location-dot"></i>
                                    <span>#16, Street 01(8m), Phum Morl, Sangkat Dongkar, Khan Dongkar, Phnom Penh, Cambodia</span>
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
                                    <span>Monday - Sunday<br>9:00am - 5:00pm </span>
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
    .container-fluid{
        border-top: 1px solid greenyellow;
        background-image: linear-gradient(white, green);
    }
    .footer-container{
        padding: 50px 0;
    }
    .container-fluid .footer-container .footer-logo{
        width: 21%;
        margin-bottom: 15px;
        cursor: pointer;
    }
    .container-fluid .footer-container .footer-logo img{
        height: 50px;
        object-fit: cover;
    }
    .container-fluid .footer-container .footer-slogain{
        font-size: 18px;
        margin-bottom: 15px;
        color: #333;
    }
    .container-fluid .footer-container .footer-social-link{
        width: 100%;
        display: flex;
        gap: 12px
    }
    .container-fluid .footer-container .footer-social-link a{
        width: 55px;
        height: 55px;
        background-color: green;
        border-radius: 100%;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
    }
    .container-fluid .footer-container .footer-social-link a i{
        font-size: 28px;
        color: #fff;
    }
    .container-fluid .footer-container .footer-copyright{
        margin-top: 100px;
    }
    .footer-contact{
        width: 100%;
        color: #333;
    }
    .footer-contact .footer-contact-title{
        font-size: 22px;
        margin-bottom: 15px;
        font-weight: 600;
    }
    .footer-contact .footer-contact-detail{
        font-size: 18px;
    }
    .footer-contact .footer-contact-detail ul li{
        margin-bottom: 10px;
        display: flex;
        align-items: center;
    }
    .footer-contact .footer-contact-detail ul li i{
        padding: 0 25px 0 5px;
        width: 40px;
        display: table-cell;
        font-size: 22px;
    }
    .footer-contact .footer-contact-detail ul li a{
        cursor: pointer;
    }
    .footer-contact .footer-contact-detail ul li span{
        display: table-cell;
    }
</style>