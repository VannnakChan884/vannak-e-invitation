<script setup>
    import { galleries } from '../router/store.js';
    import { ref } from 'vue';

    const audio = ref(null);
    const isPlaying = ref(false);

    const toggleMusic = () => {
    if (isPlaying.value) {
        audio.value.pause();
    } else {
        audio.value.play();
    }
    isPlaying.value = !isPlaying.value;
    };

    // Default font size
    const fontSize = ref(18);
</script>
<template>
    <!-- Font Size Slider -->
    <div id="font-size" class="container">
        <input type="range" id="fontSize" class="vertical-slider" min="12" max="36" step="2" v-model="fontSize"/>
    </div>
    <!--Content-->
    <div class="container-fluid" :style="{ fontSize: fontSize + 'px' }">
        <div class="container w-50">
            <div class="row text-center" 
            data-aos="fade-down" 
            data-aos-anchor-placement="center-center"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            >
                <div class="col-lg-12">
                    <h1 class="text-center mb-3 gradient-text">សិរីមង្គលអាពាហ៍ពិពាហ៍</h1>
                    <span class="fs-2">The Wedding Day</span>
                </div>
            </div>
            <div class="row mt-5" id="parents" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
                <div class="col-lg-6 col-md-6">
                    <div class="row">
                        <div class="col-lg-3 col-md-3 col-sm-3">
                            <h6>លោក</h6>
                        </div>
                        <div class="col-lg-9 col-md-9 col-sm-9">
                            <h4>ម៉ឹកចាន់វាសនា</h4>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-3 col-md-3 col-sm-3">
                            <h6>លោកស្រី</h6>
                        </div>
                        <div class="col-lg-9 col-md-9 col-sm-9">
                            <h4 >លឹមសុន</h4 >
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6">
                    <div class="row text-end">
                        <div class="col-lg-6 col-md-6 col-sm-6">
                            <h6>លោក</h6>
                        </div >
                        <div class="col-lg-6 col-md-6 col-sm-6">
                            <h4>ឃិនណី</h4>
                        </div >
                    </div >
                    <div class="row text-end">
                        <div class="col-lg-6 col-md-6 col-sm-6">
                            <h6>លោកស្រី</h6>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-6">
                            <h4>ឡុងវណ្ណនាង</h4>
                        </div >
                    </div >
                </div>
            </div>
            <div class="row mt-5" id="invitation" data-aos="fade-down" data-aos-duration="500">
                <div class="col-lg-12 col-md-12 col-sm-12">
                    <h6 class="text-center mb-2">មានកិត្តិយស</h6 >
                    <h3 class="text-center mb-2">សូមគោរពអញ្ចើញ</h3>
                    <p class="text-break lh-lg text-modify">
                    សម្តេចទ្រង់ ឯកឧត្តម លោកជំទាវ​ អ្នកឧកញ៉ា ​ឧកញ៉ា លោក លោក​ស្រី អ្នកនាងកញ្ញា
                    អញ្ជើញចូលរួមជាអធិបតី និងជាភ្ញៀវកិតិ្តយសដើម្បីប្រសិទ្ធិពរជ័យ សិរីមង្គល ក្នុងពិធីរៀបអាពាហ៍ពិពាហ៍
                    កូនប្រុស-ស្រី របស់យើងខ្ញុំ
                    </p  >
                </div >
            </div >
            <div class="row mt-3">
                <div class="col-lg-6 col-md-6 col-sm-6 box groom">
                    <div class="text-center">
                        <div class="row mb-2 m-0" data-aos="fade-up">
                            <div class="col-12 mb-3">
                                <h6>កូនប្រុសនាម</h6>
                            </div>
                            <div class="col-12">
                                <h4 class="text-warning fw-semibold">ចាន់វណ្ណៈ</h4 >
                            </div >
                        </div >
                        <div class="row m-0 groom-img">
                            <div class="box-img col-lg-12 p-0" data-aos="fade-right"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500">
                                <img src="/images/groom.jpg" alt="Groom">
                            </div >
                        </div >
                </div >
                </div >
                <div class="col-lg-6 col-md-6 col-sm-6 box">
                    <div class="text-center">
                        <div class="row mb-2 m-0" data-aos="fade-up">
                            <div class="col-12 mb-3">
                                <h6>កូនស្រីនាម</h6>
                            </div>
                            <div class="col-12">
                                <h4 class="text-warning fw-semibold">ឃិនស្រីណយ</h4>
                            </div >
                        </div >
                        <div class="row m-0 groom-img">
                            <div class="box-img col-lg-12 p-0" data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500">
                                <img src="/images/bride.jpg" alt="Bride">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mt-5" id="date-time">
                <div class="col-12 text-center">
                    <h3>និងពិសារភោជនាអាហារដែលនឹងប្រព្រឹត្តទៅ</h3>
                    <p class="mt-2 lh-lg text-modify">
                    នៅ ថ្ងៃ<span class="text-warning fs-5 fw-medium">សៅរ៍ </span>
                    ទី<span class="text-warning fs-5 fw-medium">១៥ </span>
                    ខែ<span class="text-warning fs-5 fw-medium">មីនា </span>
                    ឆ្នាំ<span class="text-warning fs-5 fw-medium">២០២៥ </span>
                    ត្រូវនឹង ថ្ងៃ<span class="text-warning fs-5 fw-medium">២រោច </span>
                    ខែ<span class="text-warning fs-5 fw-medium">ផល្គុន </span>
                    ឆ្នាំ<span class="text-warning fs-5 fw-medium">រោង ឆស័ក </span>
                    ពុទ្ធសករាជ<span class="text-warning fs-5 fw-medium"> ២៥៦៨ </span>
                    វេលាម៉ោង<span class="text-warning fs-5 fw-medium"> ៥:០០នាទីល្ងាច </span>
                    នៅ<span class="text-warning fs-5 fw-medium"> គេហដ្ឋានខាងស្រី </span>
                    ស្ថិតនៅ ភូមិ<span class="text-warning fs-5 fw-medium">កសិករ </span>
                    ឃុំ<span class="text-warning fs-5 fw-medium">សំឡាញ </span>
                    ស្រុក<span class="text-warning fs-5 fw-medium">អង្គជ័យ </span>
                    ខេត្ត<span class="text-warning fs-5 fw-medium">កំពត </span>ដោយមេត្រីភាព។ សូមអរគុណ!
                    <br>(សូមពិនិត្យមើលប្លង់បញ្ជាក់)</p>
                </div>
            </div>
            <div class="row mt-5" id="event">
                <div class="col-12 text-center mb-2">
                        <h3>កម្មវិធីសិរីសួស្ដីអាពាហ៍ពិពាហ៍</h3>
                </div>
                <div class="col-12 text-center">
                        <h4 class="mt-4 text-decoration-underline">កម្មវិធីថ្ងៃទី១</h4>
                        <h5 class="mt-4 text-start">ថ្ងៃសុក្រ ទី១៤ ខែមីនា ឆ្នាំ២០២៥</h5>
                </div>
                <div class="col-12">
                        <table class="table table-hover">
                            <tr>
                                <td>ម៉ោង ០២ៈ០០ រសៀល</td>
                                <td>:</td >
                                <td>ពិធីសែនក្រុងពាលី</td>
                            </tr>
                                <tr>
                                <td>ម៉ោង ០៣ៈ០០ រសៀល</td>
                                <td>:</td>
                                <td>ពិធីសូត្រមន្តចម្រើនព្រះបរិត្ត</td>
                            </tr>
                            <tr>
                                <td>ម៉ោង ០៤ៈ០០ រសៀល</td>
                                <td>:</td>
                                <td>ពិធីជំពាលានិងជាវខាន់ស្លា</td>
                            </tr>
                            <tr>
                                <td>ម៉ោង ០៥ៈ០០ ល្ងាច</td>
                                <td>:</td>
                                <td>អញ្ជើញភ្ញៀវកិត្តិយសពិសាអាហារពេលល្ងាច</td>
                            </tr>
                        </table>
                </div>
                <div class="col-12 text-center mb-2">
                        <h4 class="mt-4 text-decoration-underline">កម្មវិធីថ្ងៃទី២</h4>
                        <h5 class="mt-4 text-start">ថ្ងៃសៅរ៍ ទី១៥ ខែមីនា ឆ្នាំ២០២៥</h5>
                </div>
                <div class="col-12">
                        <table class="table table-hover">
                            <tr>
                                <td>ម៉ោង ០៦ៈ៣០ ព្រឹក</td>
                                <td>:</td>
                                <td>ជួបជុំភ្ញៀវកិត្តិយសរៀបពិធីចំហែជំនូន</td>
                            </tr>
                            <tr>
                                <td>ម៉ោង ០៧ៈ០០ ព្រឹក</td>
                                <td>:</td>
                                <td>ពិធីហែជំនូន(ហែកំណត់) និងអញ្ជើញភ្ញៀវកិត្តយសពិសាអាហារពេលព្រឹក</td>
                            </tr>
                            <tr>
                                <td>ម៉ោង ០៧ៈ៣០ ព្រឹក</td>
                                <td>:</td>
                                <td>ពិធីចៅមហានិយាយជើងការរៀបរាប់ផ្លែឈើ</td>
                            </tr>
                            <tr>
                                <td>ម៉ោង ០៨ៈ៣០ ព្រឹក</td>
                                <td>:</td>
                                <td>ពិធីបំពាក់ចិញ្ចៀន</td>
                            </tr>
                            <tr>
                                <td>ម៉ោង ០៩ៈ១៥ ព្រឹក</td>
                                <td>:</td>
                                <td>ពិធីកាត់សក់បង្កក់សិរី</td >
                            </tr>
                            <tr>
                                <td>ម៉ោង ១១ៈ០០ ថ្ងៃត្រង់</td>
                                <td>:</td>
                                <td>ពិធីបង្វិលពពិលសំពះផ្ទឹមសែនចងដៃ</td>
                            </tr>
                            <tr>
                                <td>ម៉ោង ១២ៈ០០ ថ្ងៃត្រង់</td>
                                <td>:</td>
                                <td>អញ្ជើញភ្ញៀវកិត្តិយសពិសាអាហារថ្ងៃត្រង់</td>
                            </tr>
                            <tr>
                                <td>ម៉ោង ០៥ៈ០០ ល្ងាច</td>
                                <td>:</td>
                                <td>ទទួលភ្ញៀវកិត្តិយសពិសាភោជនាហារ</td>
                            </tr>
                        </table>
                </div>
            </div>
            <div class="row mt-5" id="thank-sorry">
                <div class="col-12">
                    <h3 class="text-center">សេចក្ដីថ្លែងអំណរគុណ និងសូមអភ័យទោស</h3>
                    <p class="lh-lg mt-2 text-modify">យើងខ្ញុំ សូមថ្លែងអំណរគុណយ៉ាងជ្រាលជ្រៅ ចំពោះការអញ្ចើញចូលរួមជាភ្ញៀវកិត្តិយស
                    ក្នុងពិធីរៀបអាពាហ៍ពិពាហ៍កូនប្រុស-ស្រីរបស់យើងខ្ញុំ និងសូមខន្តី អភ័យទោស
                    ដោយពុំបានជួបអញ្ចើញដោយផ្ទាល់ និងការសរសេរឈ្មោះរបស់ភ្ញៀវកិត្តិយសមិនបានត្រឹមត្រូវ ឬពុំបានសរសេរឈ្មោះ។
                    សូមជូនពរសម្តេចទ្រង់ ឯកឧត្តម លោកជំទាវ​ អ្នកឧកញ៉ា ​ឧកញ៉ា លោក លោក​ស្រី អ្នកនាងកញ្ញា
                    និងភ្ញៀវកិត្តិយសទាំងអស់មានសុខភាពល្អ និងទទួលបានជោគជ័យគ្រប់ភារកិច្ច។</p>
                </div>
            </div>
            <div class="row mt-5" id="location">
                <div class="col-12 text-center">
                    <h3>ទីតាំងកម្មវិធី</h3>
                    <p class="lh-lg mt-2">ភូមិកសិករ ឃុំសំឡាញ ស្រុកអង្គជ័យ ខេត្តកំពត</p>
                </div>
                <div class="col-12 text-center mt-3">
                    <button type="button" class="btn btn-outline-warning btn-lg">
                        <a href="https://maps.google.com/maps?q=10.865470,104.590876&ll=10.865470,104.590876&z=16" class="text-warning text-decoration-none">
                        ទីតាំងផ្ទះការ <i class="fa-solid fa-map fa-bounce fa-lg"></i>
                        </a>
                    </button>
                    <div class="location-img mt-5">
                        <img src="/images/location.jpg" class="img-fluid" alt="Location">
                    </div>
                </div>
            </div>
            <div class="row mt-5">
                <div class="col-12 text-center">
                    <h3>កម្រងរូបភាព</h3>
                </div>
                <div v-for="(gallery, i) in galleries" :key="i" class="col-lg-4 col-md-4 col-sm-4 col-4 mt-4">
                    <div class="gallery">
                        <img :src="gallery" alt="Image Gallery">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container" id="audio">
        <div class="row m-0 text-center">
            <div class="col-12 p-0 mb-3 box-icon">
                <audio controls autoplay loop ref="audio">
                    <source src="/audio/Noly Record.mp3" type="audio/mp3">
                </audio>
                <div class="music-icon" @click="toggleMusic">
                    <span v-if="isPlaying"><i class="fa-solid fa-headphones fa-beat fa-lg"></i></span>
                    <span v-else><i class="fa-solid fa-music fa-lg"></i></span>
                </div>
            </div>
            <div class="col-12 p-0 box-icon">
                <a href="https://maps.google.com/maps?q=10.865470,104.590876&ll=10.865470,104.590876&z=16" target="_blank" class="btn rounded-5 text-warning text-decoration-none">
                    <i class="fa-solid fa-map fa-bounce fa-lg text-light"></i>
                </a>
            </div>
        </div>
    </div>
    <!--Footer-->
    <div class="container-fluid text-center" :style="{ fontSize: fontSize + 'px' }">
        <div class="container">
            <div class="row">
                <div class="col-md-12 col-12 mb-4">
                    <h3 class="footer-slogain">ទំនាក់ទំនងម្ចាស់កម្មវិធី</h3>
                </div>
            </div>
            <div class="footer-copyright">
                <span>ChanVannak</span>
                <p>0962665240</p>
            </div>
        </div>
    </div >
</template>
<style>
    #font-size{
        width: 150px;
        position: absolute;
        bottom: 30%;
        right: 2.5%;
        transform: translate(-2.5%, -30%);
        text-align: center;
        z-index: 3;
    }
    #font-size .vertical-slider{
        transform: rotate(-90deg);
    }
    #font-size .vertical-text,.minus-text{
        font-family: 'Popin';
        font-size: 20px;
        margin-bottom: 10px;
        /* transform: rotate(90deg); */
    }
    #font-size .minus-text{
        top: 0;
    }
    .container-fluid{
        background-color:#000000a9;
        padding: 50px;
        position: relative;
        transition: font-size 0.3s ease;
    }
    @keyframes colorChange {
        0% { color: pink; }
        35% { color: lightyellow; }
        55% { color: orange; }
        75% { color: orangered; }
        100% { color: red; }
    }
    .gradient-text{
        animation: colorChange 3s infinite;
        animation-timing-function: linear;
        animation-direction: alternate;
    }
    .text-modify{
        text-align: justify;
        text-align-last: center;
    }
    .box,.groom-img{
        display: flex;
        justify-content: center !important;
        align-items: center !important;
    }
    .box-img{
        width: 250px;
        height: 340px;
        border: 2px solid#fff;
        box-shadow: 1px 1px 10px 0#ffffff4b;
        border-radius: 15px;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .box-img img{
        width: 98%;
        height: 98%;
        object-fit: cover;
        border-radius: 10px;
    }
    .container-fluid .footer-container .footer-slogain{
        margin-bottom: 15px;
    }
    .table tr td{
        padding-left: 0;
        padding-right: 0;
    }
    .table>:not(caption)>*>*{
        background: none;
        border-bottom-width: 0;
        box-shadow: none;
        color:#fff;
    }
    .table tr td:first-child{
        width: 200px;
    }
    .table tr td:nth-child(2){
        width: 30px;
    }
    button{
        box-shadow: 1px 1px 10px 0 #fff;
    }
    button:hover .text-warning{
        color: #fff !important;
    }
    .location-img{
        width: 100%;
        height: 600px;
        border: 1px solid#fff;
        box-shadow: 1px 1px 10px 0#ffffff4b;
        border-radius: 10px;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .location-img img{
        width: 98%;
        height: 98%;
        object-fit: cover;
        border-radius: 5px;
    }
    .gallery{
        width: 100%;
        height: 100%;
        border-radius: 5px;
        border: 1px solid #fff;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 1px 1px 10px 0 #ffffff4b;
    }
    .gallery img{
        width: 99%;
        height: 99%;
        object-fit: cover;
        border-radius: 3px;
        margin: 10px;
        transition: transform .3s;
    }
    .gallery:hover img{
        transform: scale(1.1);
    }
    audio{
        display: none;
    }
    #audio{
        position: absolute;
        width: 50px !important;
        height: 150px !important;
        bottom: 7%;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50px;
        overflow: hidden;
        right: 5%;
        transform: translate(-5%, -7%);
        z-index: 10;
    }
    #audio .box-icon{
        padding: 10px;
    }
    #audio .music-icon{
        padding: 6px 12px;
        cursor: pointer;
    }

    .box-img,.location-img,#audio,.gallery{
        animation: borderColorChange 3s infinite;
        animation-timing-function: linear;
        animation-direction: alternate;
    }
</style>