<script setup>
import Footer from "../components/Footer.vue";
import GoToTop from "../components/GoToTop.vue";
import { designerList } from "../router/store.js";
</script>
<template>
    <div class="container-fluid" style="height: 250px;background-color: green;margin-top: -125px;">
        <div class="container" style="padding-top: 150px; color: #fff;">
            <h1>ទំព័រអំពីខ្ញុំ</h1>
            <h3 style="font-size: 18px;">About me</h3>
        </div>
    </div>
    <div class="container mt-5 mb-5">
        <div class="row about-title-heading">
            <div class="col-md-12 col-12">
                <h2 class="heading-title">Who I Am</h2>
                <p class="title-underline"></p>
            </div>
        </div>
        <div class="row mt-5" style="margin-bottom: 150px">
            <div class="col-md-6 col-12 mb-4">
                <div class="my-img">
                    <img src="https://scontent.fpnh20-1.fna.fbcdn.net/v/t39.30808-6/421110469_1076160310095460_2617407108266214787_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFNI8xjTUoSUQLXiDm0FKUCuax8X694K-a5rHxfr3gr5tXA54eP1G6Ic1fU05q_uLkqRsBZFgiW2LOrMGNL-JMG&_nc_ohc=y-06ve6-YNkAX-Xs35P&_nc_ht=scontent.fpnh20-1.fna&oh=00_AfBudar3FYjIx-KtFArjhsPCAJCFRFiqJwIPN-G0mTVUmg&oe=6603B91E"
                        alt="">
                </div>
            </div>
            <div class="col-md-6 col-12 about-me">
                <h2 class="mb-3 heading">About Vannak</h2>
                <p class="mb-3">
                    Me adheres to six original core values: Teamwork, High Ambition,
                    Strong Confident, Being the only ONE, Working Hard, and RS Quality
                    Cycle to ensure I deliver what I promise to myself and my customers.
                    With these six core values in mind, every member of the company has
                    proven to my customers that I CAN DO IT!
                </p>
                <p class="mb-3">
                    Vannak is Cambodia's #1 Design Service Specialized in Graphic Design.
                    I provide concept designers, especially freshly graduated students,
                    with the accessibility to my vast pool of concept opportunities. For
                    the company looking to recruit employees, I ensure you will have the
                    best candidate in the market.
                </p>
                <blockquote>
                    I love what I do, I do the best in what I love.
                    <span>Vannak Team</span>
                </blockquote>
            </div>
        </div>
        <div class="row" style="margin-bottom: 150px;">
            <div class="Team-heading-title mb-5">
                <h2 class="title">My Team</h2>
                <p class="title-underline"></p>
            </div>
            <div class="col-md-3" v-for="(designer, i) in designerList" :key="i">
                <div class="card">
                    <div class="img-box">
                        <img :src="designer.img" alt="">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">{{ designer.name }}</h5>
                        <p class="card-text">{{ designer.position }}</p>
                        <a class="btn-explore mt-4">
                            <span>Explore</span>
                            <i class="fa-solid fa-angle-down"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <GoToTop />
    <Footer />
</template>
<style scoped>
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

.about-me .heading {
    font-size: 21px;
    font-weight: 600;
}

.about-me p {
    text-align: justify;
}

blockquote {
    border-left: 8px solid green;
    line-height: 1.6;
    position: relative;
    padding: 1.2em 30px 1.2em 50px;
    color: green;
    background-image: linear-gradient(to left, rgba(0, 128, 0, 0.2), rgba(0, 128, 0, 0.1));
    font-size: 24px;
    font-weight: 500;
}

blockquote::before {
    content: "“";
    font-family: Arial;
    color: green;
    font-size: 4em;
    position: absolute;
    left: 10px;
    top: -10px;
}

blockquote span {
    display: block;
    margin-top: 1em;
    font-weight: bold;
    font-style: normal;
    font-size: 16px;
}

blockquote::after {
    content: "";
}

.my-img {
    height: 100%;
    width: 100%;
    overflow: hidden;
}

.my-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.card {
    background-color: #f9f9f9;
    height: 500px;
    margin-bottom: 20px;
    border-radius: 20px;
    overflow: hidden;
    border: 1px solid green;
}

.card .img-box {
    height: 70%;
}

.card .img-box img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.card .card-body {
    width: 100%;
    height: 30%;
}

.card .card-body .card-title {
    font-weight: 600;
}

.Team-heading-title {
    text-align: center;
}

.Team-heading-title .title {
    text-transform: uppercase;
    font-size: 25px;
    margin-bottom: 5px;
    font-weight: 600;
}

.Team-heading-title .title-underline {
    width: 5%;
    height: 2px;
    background-color: green;
    border-radius: 50px;
    margin: auto;
}

.btn-explore {
    padding-left: 0;
    padding-right: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    outline: none;
    border: none;
    text-decoration: none;
}

.btn-explore span {
    padding: 3px 10px;
    border-radius: 50px;
    transition: 0.3s all ease;
    color: green;
    font-weight: 500;
    cursor: pointer;
}

.btn-explore i {
    width: 35px;
    height: 35px;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    transition: 0.3s all ease;
    cursor: pointer;
    color: green;
}

.btn-explore span:hover,
.btn-explore i:hover {
    background-color: rgba(0, 128, 0, 0.2);
}

/* Extra small devices(portrait phones, less than 576px) */
@media (max-width: 575.98px) {
    .page-heading {
        height: 210px;
    }

    .page-title h1 {
        font-size: 20px;
    }

    .page-title h3 {
        font-size: 15px !important;
    }

    .brand-container {
        margin-top: 20px !important;
    }

    .about-title-heading {
        margin-bottom: 0;
    }

    .about-title-heading .title-underline {
        width: 25%;
        height: 5px;
    }
}
</style>
