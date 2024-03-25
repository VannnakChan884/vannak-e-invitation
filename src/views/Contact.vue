<script setup>
import Footer from '../components/Footer.vue'
import GoToTop from '../components/GoToTop.vue'
</script>
<template>
    <div class="container-fluid" style="height: 250px;background-color: green;margin-top: -125px;">
        <div class="container" style="padding-top: 150px; color: #fff;">
            <h1>ទំព័រទាក់ទង</h1>
            <h3 style="font-size: 18px;">Contact me</h3>
        </div>
    </div>
    <div class="container mt-5" style="margin-bottom: 150px;">
        <div class="row">
            <div class="col-md-6 col-12">
                <div class="contact-info">
                    <h3 class="contact-info-title">ទំនាក់ទំនង</h3>
                    <div class="mb-3">
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
                                <span>Monday - Sunday<br>9:00am - 5:00pm </span>
                            </li>
                        </ul>
                    </div>
                    <div class="contact-info-map-container">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d581.1326699676953!2d104.88197715769653!3d11.524644798427046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2skh!4v1711268577066!5m2!1sen!2skh"
                            width="100%" height="200" style="border:0;" allowfullscreen="" loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                        <div class="overlay">
                            <h2>Chan Vannak</h2>
                            <a href="https://www.google.com/maps/dir/11.5246589,104.8818914/11.5246549,104.8818823/@11.5246589,104.8818914,16z/data=!4m6!4m5!1m1!4e1!1m1!4e1!3e9?hl=en&entry=ttu"
                                target=" _blank">View larger map</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-12">
                <div class="contact-form">
                    <h2 class="contact-form-title">Contact Form</h2>
                    <form class="contact-form-info">
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="floatingInput" placeholder="Chan Vannak"
                                required>
                            <label for="floatingInput">Full name</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="email" class="form-control" id="floatingEmail"
                                placeholder="vannakchan884@gmail.com" required>
                            <label for="floatingEmail">Email</label>
                        </div>
                        <div class="form-floating mb-3">
                            <textarea class="form-control" placeholder="Leave a Massage here" id="floatingTextarea"
                                style="height: 150px; resize: unset; overflow-y: hidden;" required></textarea>
                            <label for="floatingTextarea">Message</label>
                        </div>
                        <button class="btn" style="color: #fff;background-color: green;float: right; padding: 10px 20px; font-weight: 600;">Send message</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <GoToTop />
    <Footer />
</template>
<style scoped>
.contact-info-title {
    margin-bottom: 16px;
}

ul li {
    margin-bottom: 10px;
    display: flex;
    align-items: center;
}

ul li i {
    padding: 0 25px 0 5px;
    width: 40px;
    display: table-cell;
    font-size: 22px;
}

ul li a {
    cursor: pointer;
}

ul li span {
    display: table-cell;
}

.contact-info-map-container {
    position: relative;
}

.overlay {
    position: absolute;
    top: 20px;
    left: 20px;
    width: 50%;
    background-color: #f9f9f9;
    padding: 10px 20px;
    border-radius: 5px;
    box-shadow: 2px 2px 5px rgba(0, 128, 0, 0.5);
}

.overlay h2 {
    font-size: 16px;
    font-weight: 600;
}

.overlay a {
    text-decoration: none;
    font-size: 14px;
}

.contact-form-title {
    margin-bottom: 16px;
}
.contact-form-info label{
    z-index: 1;
}
</style>