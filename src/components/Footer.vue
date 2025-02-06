<script setup>
import { socialLinks } from "../router/store";
</script>
<template>
    <footer class="container-fluid text-center">
        <div class="container footer-container">
            <div class="row">
                <div class="col-md-12 col-12 mb-4">
                    <h2 class="footer-slogain">ទំនាក់ទំនងម្ចាស់កម្មវិធី</h2>
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
            </div>
            <div class="footer-copyright">
                <span>Build by Chan Vannak</span>
            </div>
        </div>
    </footer>
</template>
<style scoped>
.footer-container {
    padding: 50px 0;
}

.container-fluid .footer-container .footer-slogain {
    /* font-size: 18px; */
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
    color: skyblue;
    display: block;
    padding: 10px;
    border-radius: 10%;
    background-color: #fff;
    text-align: center;
}

.container-fluid .footer-container .footer-copyright {
    margin-top: 20px;
}
</style>