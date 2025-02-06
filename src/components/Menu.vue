<template>
    <div class="container-fluid mt-3">
        <div class="container w-50 p-5">
            <div class="row text-center">
                <div class="col-lg-12">
                    <h1 class="text-center mb-4">សិរីមង្គលអាពាហ៍ពិពាហ៍</h1>
                    <h4>The Wedding Day</h4>
                </div>
            </div>
            <div class="row mt-5">
                <div class="col-lg-6 col-md-6 col-sm-6">
                    <div class="row">
                        <div class="col-3">
                            <h6>លោក</h6>
                        </div>
                        <div class="col-9">
                            <h4>ម៉ឹក ចាន់វាសនា</h4>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <h6>លោកស្រី</h6>
                        </div>
                        <div class="col-9">
                            <h4>លឹម សុន</h4>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6">
                    <div class="row">
                        <div class="col-3">
                            <h6>លោក</h6>
                        </div>
                        <div class="col-9">
                            <h4>ឃិន ណី</h4>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <h6>លោកស្រី</h6>
                        </div>
                        <div class="col-9">
                            <h4>ឡុង វណ្ណនាង</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mt-5">
                <div class="col-lg-12 col-md-12 col-sm-12">
                    <p class="text-center mb-2">មានកិត្តិយស</p>
                    <h3 class="text-center mb-2">សូមគោរពអញ្ចើញ</h3>
                    <p class="text-break lh-lg text-modify">
                        សម្តេច ទ្រង់ ឯកឧត្តម លោកជំទាវ ​អ្នកឧកញ៉ា ​ឧកញ៉ា លោក លោក​ស្រី អ្នកនាង កញ្ញា 
                        អញ្ជើញចូលរួមជាអធិបតី និងជាភ្ញៀវកិតិ្តយស ដើម្បីប្រសិទ្ធិពរជ័យ សិរីមង្គលក្នុងពិធីរៀបអាពាហ៍ពិពាហ៍
                        <br>កូនប្រុស-ស្រី របស់យើងខ្ញុំ
                    </p>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-lg-6 col-md-6 col-sm-6 box">
                    <div class="text-center">
                        <div class="row mb-2 m-0">
                            <div class="col-12 mb-3">
                                <p>កូនប្រុសនាម</p>
                            </div>
                            <div class="col-12">
                                <h4 class="fw-bold">ចាន់ វណ្ណៈ</h4>
                            </div>
                        </div>
                        <div class="row m-0">
                            <div class="box-img col-lg-12 p-0">
                                <img src="/images/groom.jpg" alt="Groom">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6 box">
                    <div class="text-center">
                        <div class="row mb-2 m-0">
                            <div class="col-12 mb-3">
                                <p>កូនស្រីនាម</p>
                            </div>
                            <div class="col-12">
                                <h4 class="fw-bold">ឃិន ស្រីណយ</h4>
                            </div>
                        </div>
                        <div class="row m-0">
                            <div class="box-img col-lg-12 p-0">
                                <img src="/images/bride.jpg" alt="Bride">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .container{
        box-shadow: 1px 1px 20px 0 skyblue;
        border-radius: 2%;
        border: 2px solid skyblue;
    }
    .text-modify{
        text-align: justify;
        text-align-last: center;
    }
    .box{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .box-img{
        width: 300px;
        height: 390px;
        border: 2px solid skyblue;
        box-shadow: 1px 1px 20px 0 skyblue;
        border-radius: 3%;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .box-img img{
        width: 99%;
        height: 99%;
        object-fit: cover;
        border-radius: 2%;
    }
</style>