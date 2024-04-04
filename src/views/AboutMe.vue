<script setup>
import { ref, computed } from "vue";
import ExcelJS from 'exceljs';
import Footer from "../components/Footer.vue";
import GoToTop from "../components/GoToTop.vue";
import { designerList } from "../router/store.js";

const activeCard = ref(null);

// Define computed property for button label
const buttonLabel = computed(
    () => (i) =>
        designerList.value[i].showInfo && activeCard.value === i ? "Hide" : "Show"
);

// Function to toggle showing information for a specific card
const toggleInfo = (i) => {
    designerList.value[i].showInfo = !designerList.value[i].showInfo;
    activeCard.value = designerList.value[i].showInfo ? i : null;
};

const exportToExcel = async () => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Designer Info');

    // Set header row with custom cell styles
    const headerRow = worksheet.addRow(['Name', 'Positon', 'Info']);
    headerRow.font = {
        bold: true,
        size: 14,
        color: { argb: 'FFFFFF' }
    };
    headerRow.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: '008000' }
    };

    // Set custom width and height for all cells
    worksheet.columns.forEach(column => {
        column.width = 30; // Set custom width for columns
    });

    // Add data rows
    designerList.value.forEach(user => {
        const row = worksheet.addRow([user.name, user.position, user.info]);
        row.height = 30; // Set custom height for each row
    });

    // Save workbook to Excel file
    const buffer = await workbook.xlsx.writeBuffer();
    saveAs(new Blob([buffer]), 'designer_info.xlsx');
};

// Function to simulate file download
const saveAs = (blob, fileName) => {
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    a.click();
    window.URL.revokeObjectURL(url);
};

</script>
<template>
    <div class="container-fluid" style="height: 250px; background-color: green; margin-top: -125px">
        <div class="container" style="padding-top: 150px; color: #fff">
            <h1>ទំព័រអំពីខ្ញុំ</h1>
            <h3 style="font-size: 18px">About me</h3>
        </div>
    </div>
    <div class="container mt-5 mb-5">
        <div class="row about-title-heading">
            <div class="col-md-12 col-12">
                <h2 class="heading-title">Who I Am</h2>
                <p class="title-underline"></p>
            </div>
        </div>
        <div class="row mt-5 mb-5 about-detail">
            <div class="col-md-6 col-12 mb-4">
                <div class="my-img">
                    <img src="https://scontent.fpnh20-1.fna.fbcdn.net/v/t39.30808-6/421066914_1076150873429737_8720733372656632861_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeH2ZdJMh7SWO5KSVonOExqt_L2FBQUB4VT8vYUFBQHhVFWnctAyEq2jeBCxTyDsz_FvUHoRmih2Ss1Lau0LwaaX&_nc_ohc=DhoBNOwBA54Ab4Z3kCW&_nc_ht=scontent.fpnh20-1.fna&oh=00_AfDal_PYxFxppa266XBL0_EK6m9L0L0_r-wdOPf8xhM0oQ&oe=66143DB6"
                        alt="" />
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
        <div class="row mb-5">
            <div class="col-md-9 col-12 Team-heading-title text-start">
                <h2 class="title">My Team</h2>
                <p class="title-underline"></p>
            </div>
            <div class="col-md-3 col-12 text-end">
                <button class="btn btn-export" @click="exportToExcel">
                    <i class="fa-solid fa-file-excel pe-2"></i>
                    <span>Export</span>
                </button>
            </div>
        </div>
        <div class="row" style="margin-bottom: 150px">
            <div class="col-md-3 col-sm-6 card-container" v-for="(designer, i) in designerList" :key="i">
                <div class="card">
                    <div class="img-box">
                        <img :src="designer.img" alt="" />
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">{{ designer.name }}</h5>
                        <p class="card-text">{{ designer.position }}</p>
                        <a class="btn-explore mt-4" @click="toggleInfo(i)">
                            <span>{{ buttonLabel(i) }}</span>
                            <i :class="['fa-solid', designer.showInfo ? 'fa-angle-up' : 'fa-angle-down']"></i>
                        </a>
                    </div>
                    <div v-if="activeCard === i && designer.showInfo" class="card-footer info-container">
                        <p>{{ designer.info }}</p>
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
    background-color: #008000;
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
    background-image: linear-gradient(to left,
            rgba(0, 128, 0, 0.01),
            rgba(0, 128, 0, 0.09));
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
    width: 100%;
    height: 400px;
    overflow: hidden;
}

.my-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.card-container {
    position: relative;
}

.card {
    background-color: #f9f9f9;
    /* height: 400px; */
    margin-bottom: 20px;
    border-radius: 20px;
    overflow: hidden;
    border: 1px solid green;
}

.card .img-box {
    width: 100%;
    height: 300px;
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

.info-container {
    background-color: transparent;
    text-align: justify;
    border-top: 1px solid greenyellow;
}

.Team-heading-title {
    text-align: center;
}

.Team-heading-title .title {
    text-transform: uppercase;
    font-size: 28px;
    margin-bottom: 5px;
    font-weight: 600;
}

.Team-heading-title .title-underline {
    width: 10%;
    height: 2px;
    background-color: green;
    border-radius: 50px;
}

.btn-export {
    color: green;
    font-size: 18px;
    background-color: rgba(0, 128, 0, 0.2);
    transition: 0.3s all ease;
}

.btn-export:hover {
    background-color: green;
    color: #fff;
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

    .about-title-heading h2 {
        font-size: 30px !important;
    }

    .about-title-heading .title-underline {
        width: 25%;
        height: 5px;
    }

    .about-detail {
        margin-top: 30px !important;
    }

    .card .img-box {
        width: 100%;
        height: 400px;
    }

    .Team-heading-title {
        text-align: center;
        margin-bottom: 30px !important;
    }

    .Team-heading-title .title {
        font-size: 30px;
    }

    .Team-heading-title .title-underline {
        width: 25%;
        height: 5px;
    }
}
</style>
