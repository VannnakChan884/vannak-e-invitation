<script setup>
import { ref, computed } from "vue";
import { achievementList } from "../router/store.js";
import Footer from "../components/Footer.vue";
import GoToTop from "../components/GoToTop.vue";

// Total number of pages (you can fetch this dynamically or set it manually)
const totalPages = ref(10);

// Current page
const currentPage = ref(1);

// Function to navigate to a specific page
const goToPage = (page) => {
    if (page >= 1 && page <= totalPages.value) {
        currentPage.value = page;
    }
};

// Computed property to calculate the displayed pages based on the current page
const displayedPages = computed(() => {
    const totalVisiblePages = 3; // Adjust this value based on your design
    const pages = [];
    let startPage = currentPage.value - Math.floor(totalVisiblePages / 2);
    startPage = Math.max(1, startPage);
    const endPage = Math.min(totalPages.value, startPage + totalVisiblePages - 1);

    if (startPage > 1) {
        pages.push(1);
        if (startPage > 2) {
            pages.push("...");
        }
    }

    for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
    }

    if (endPage < totalPages.value) {
        if (endPage < totalPages.value - 1) {
            pages.push("...");
        }
        pages.push(totalPages.value);
    }

    return pages;
});
</script>
<template>
    <div class="container-fluid" style="height: 250px; background-color: green; margin-top: -125px">
        <div class="container" style="padding-top: 150px; color: #fff">
            <h1>ទំព័រសមិទ្ធិផល</h1>
            <h3 style="font-size: 18px">Achievement Listing</h3>
        </div>
    </div>
    <div class="container-fluid mt-5" style="margin-bottom: 150px">
        <div class="container">
            <div class="row mb-5">
                <div class="col-md-3 col-sm-12 col-12 mb-4" v-for="(achievement, i) in achievementList"
                    :key="i">
                    <div class="achievement-card">
                        <div class="acheivement-card-img">
                            <a class="acheivement-card-link">
                                <img :src="achievement.img" alt="" />
                            </a>
                        </div>
                        <div class="acheivement-card-content">
                            <h2 class="mb-2">{{ achievement.brand }}</h2>
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
                        <div class="group-type">
                            <span>{{ achievement.type }}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="pagination">
                        <a class="prev" @click="goToPage(currentPage - 1)"
                            :class="{ disabled: currentPage === 1 }">Prev</a>
                        <template v-for="page in displayedPages" :key="page">
                            <a v-if="page !== '...'" :class="{ page: true, active: currentPage === page }"
                                @click="goToPage(page)">{{ page }}</a>
                            <span v-else>&hellip;</span>
                        </template>
                        <a class="next" @click="goToPage(currentPage + 1)"
                            :class="{ disabled: currentPage === totalPages }">Next</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <GoToTop />
    <Footer />
</template>
<style scoped>
.container{
    width: 100%;
    overflow: hidden;
    box-sizing: border-box;
}
.achievement-card {
    /* width: 300px; */
    /* height: 450px; */
    background-color: #f9f9f9;
    border-radius: 20px;
    overflow: hidden;
    position: relative;
}

.achievement-card:hover {
    box-shadow: 1px 2px 4px rgba(0, 128, 0, 0.3);
}

.achievement-card .acheivement-card-img {
    width: 100%;
    height: 200px;
    background-color: orange;
    overflow: hidden;
    cursor: pointer;
}

.achievement-card .acheivement-card-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.achievement-card .acheivement-card-content {
    padding: 10px;
}

.achievement-card .acheivement-card-content h2 {
    font-size: 22px;
}

.achievement-card .acheivement-card-content ul li {
    display: flex;
    align-items: center;
}

.achievement-card .acheivement-card-content ul li .detail-titlle {
    width: 37%;
    display: table-cell;
}

.achievement-card .acheivement-card-content ul li span {
    width: 10%;
}

.achievement-card .acheivement-card-content ul li p {
    width: 53%;
    display: table-cell;
}

.acheivement-card-footer {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 10px;
}

.acheivement-card-footer .designer a {
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

.acheivement-card-footer .designer a:hover {
    background-color: green;
    color: #fff;
}

.group-type {
    position: absolute;
    background-color: rgba(0, 128, 0, 0.5);
    top: 10px;
    left: 10px;
    padding: 3px 20px;
    text-align: center;
    margin: 0 20px 20px 0;
    border-radius: 20px;
}

.group-type span {
    color: #fff;
    font-size: 15px;
    font-weight: 400;
    text-transform: uppercase;
}

.pagination {
    display: flex;
    justify-content: center;
    margin-top: 20px;
}

.page {
    padding: 5px 10px;
    margin: 0 5px;
    text-decoration: none;
    color: green;
    border: 1px solid green;
    border-radius: 50px;
    cursor: pointer;
}

.page.active {
    background-color: green;
    color: #fff;
}

.prev,
.next {
    padding: 5px 15px;
    margin: 0 5px;
    text-decoration: none;
    color: green;
    border: 1px solid green;
    border-radius: 50px;
    cursor: pointer;
}

.prev.disabled,
.next.disabled {
    opacity: 0.3;
    pointer-events: none;
}
</style>
