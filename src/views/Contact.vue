<script setup>
import Footer from "../components/Footer.vue";
import GoToTop from "../components/GoToTop.vue";
</script>
<template>
  <div
    class="container-fluid"
    style="height: 250px; background-color: green; margin-top: -125px"
  >
    <div class="container" style="padding-top: 150px; color: #fff">
      <h1>ទំព័រទាក់ទង</h1>
      <h3 style="font-size: 18px">Contact me</h3>
    </div>
  </div>
  <div class="container mt-5" style="margin-bottom: 150px">
    <div class="row">
      <div class="col-md-6 col-12">
        <div class="contact-info">
          <h3 class="contact-info-title">ទំនាក់ទំនង</h3>
          <div class="mb-3">
            <ul>
              <li>
                <i class="fa-solid fa-location-dot"></i>
                <span
                  >#16, Street 01(8m), Phum Morl, Sangkat Dongkar, Khan Dongkar,
                  Phnom Penh, Cambodia</span
                >
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
                <span>Monday - Sunday<br />9:00am - 5:00pm </span>
              </li>
            </ul>
          </div>
          <div class="contact-info-map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d31270.15208811746!2d104.8133266347656!3d11.568410000000041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDM0JzA2LjMiTiAxMDTCsDUwJzAyLjEiRQ!5e0!3m2!1sen!2skh!4v1721817229908!5m2!1sen!2skh"
              width="600"
              height="450"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            <div class="overlay">
              <!-- <h2>Chan Vannak</h2> -->
              <!-- <a
                href="https://www.google.com/maps/place/11%C2%B034'06.3%22N+104%C2%B050'02.1%22E/@11.56841,104.813327,13z/data=!4m4!3m3!8m2!3d11.5684167!4d104.8339167?hl=en&entry=ttu"
                target=" _blank"
                >View larger map</a
              > -->
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-12">
        <div class="contact-form">
          <h2 class="contact-form-title">Contact Form</h2>
          <form class="contact-form-info">
            <div class="form-floating mb-3">
              <input
                type="text"
                class="form-control"
                id="floatingInput"
                placeholder="Chan Vannak"
                required
              />
              <label for="floatingInput">Full name</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="email"
                class="form-control"
                id="floatingEmail"
                placeholder="vannakchan884@gmail.com"
                required
              />
              <label for="floatingEmail">Email</label>
            </div>
            <div class="form-floating mb-3">
              <textarea
                class="form-control"
                placeholder="Leave a Massage here"
                id="floatingTextarea"
                style="height: 150px; resize: unset; overflow-y: hidden"
                required
              ></textarea>
              <label for="floatingTextarea">Message</label>
            </div>
            <button
              class="btn"
              style="
                color: #fff;
                background-color: green;
                float: right;
                padding: 10px 20px;
                font-weight: 600;
              "
            >
              Send message
            </button>
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
.contact-form-info label {
  z-index: 1;
}
</style>
