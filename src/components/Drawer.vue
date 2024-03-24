<script setup>
    import { MenuList, isDrawer } from '../router/store';
</script>
<template>
    <div class="drawer" :class="{'isDrawer': isDrawer}">
        <div class="drawer-box">
            <div class="logo">
                <RouterLink to="/"><img src="/src/assets/logo.png" alt=""></RouterLink>
            </div>
            <div class="menu">
                <ul>
                    <li v-for="(menu,i) in MenuList" :key="i">
                        <RouterLink :to="menu.route">{{ menu.name }}</RouterLink>
                    </li>
                </ul>
            </div>
            <div class="footer">
                <h1>Follow Me</h1>
                <div class="social-media">
                    <div class="link">
                        <a href="https://www.facebook.com/vannakchan4544/" target="_blank">
                            <i class="fa-brands fa-facebook"></i>
                        </a>
                    </div>
                    <div class="link">
                        <a href="https://t.me/chanvannak408" target="_blank">
                            <i class="fa-brands fa-telegram"></i>
                        </a>
                    </div>
                    <div class="link">
                        <a href="https://www.tiktok.com/@vannakchan884" target="_blank">
                            <i class="fa-brands fa-tiktok"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .drawer{
        width: 280px;
        height: 100%;
        position: fixed;
        top: 0;
        left: -300px;
        background-image: linear-gradient(green, white);
        box-shadow: 6px 0 30px rgba(0, 128, 0, 0.4);
        transition: 0.3s;
        z-index: 4;
    }
    .drawer .logo{
        width: 100%;
        height: 130px;
        overflow: hidden;
        border-bottom: 1px solid greenyellow;
        margin-bottom: 20px;
    }
    .drawer .logo a{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .drawer .logo img{
        width: 50%;
        object-fit: cover;
        cursor: pointer;
    }
    .drawer .drawer-box .menu{
        width: 90%;
        margin: auto;
    }
    .drawer .drawer-box .menu ul li{
        border-bottom: 1px solid greenyellow;
    }
    .drawer .drawer-box .menu ul li:last-child{
        border-bottom: none;
    }
    .drawer .drawer-box .menu ul li a{
        display: block;
        padding: 9px;
        color:#fff;
        text-decoration: none;
        cursor: pointer;
    }
    .isDrawer{
        left: 0;
    }
    .drawer .drawer-box .footer{
        width: 250px;
        position: absolute;
        bottom: 0;
        left: 0;
        border-top: 1px solid greenyellow;
    }
    .drawer .drawer-box .footer h1{
        padding-top: 10px;
        padding-bottom: 10px;
        font-size: 18px;
        text-align: center;
    }
    .drawer .drawer-box .footer .social-media{
        width: 90%;
        margin: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 9px;
        padding-bottom: 10px;
    }
    .drawer .drawer-box .footer .social-media .link{
        width: 45px;
        height: 45px;
        background-color: green;
        border-radius: 50%;
    }
    .drawer .drawer-box .footer .social-media .link a{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        border-radius: 50%;
    }
    .drawer .drawer-box .footer .social-media .link i{
        color: #fff;
        font-size: 25px;
    }
</style>