<script setup>
  import { ref, onMounted, onUnmounted } from 'vue';

  // Set the wedding date (YYYY, MM (0-based), DD, HH, MM, SS)
  const weddingDate = new Date(2025, 2, 15, 6, 30, 0); // March 15, 2025, at 06:30 AM

  // For testing style wedding date
  // const weddingDate = new Date(new Date().getTime() + 20000); // 30 seconds from now


  // Reactive countdown object
  const countdown = ref({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Track if the event has started
  const eventStarted = ref(false);

  let timerInterval = null;

  // Function to update the countdown
  const updateCountdown = () => {
    const now = new Date().getTime();
    const timeDifference = weddingDate - now;

    if (timeDifference > 0) {
      countdown.value.days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      countdown.value.hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      countdown.value.minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      countdown.value.seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
    } else {
      // Show event message when the countdown reaches 0
      eventStarted.value = true;
      clearInterval(timerInterval);
    }
  };

  // Start countdown when component is mounted
  onMounted(() => {
    updateCountdown(); // Initial call
    timerInterval = setInterval(updateCountdown, 1000); // Update every second
  });

  // Clear the interval when the component is unmounted
  onUnmounted(() => {
    clearInterval(timerInterval);
  });
</script>
<template>
  <div class="container-fluid">
  <div class="container p-0" id="home-box">
    <div class="row pt-5 m-0">
      <div class="col-lg-12 col-md-12 col-sm-12 p-0 home-container">
        <h1 class="gradient-text">🎉 សិរីមង្គលអាពាហ៍ពិពាហ៍ 🎉</h1>
        <!-- Countdown Timer -->
        <div class="countdown">
          <p class="text-warning fs-3 pb-3">ថ្ងៃសៅរ៍ ទី១៥ ខែមីនា ឆ្នាំ២០២៥</p>
          <div v-if="!eventStarted" class="timer">
            <span>{{ countdown.days }} ថ្ងៃ</span>
            <span>{{ countdown.hours }} ម៉ោង</span>
            <span>{{ countdown.minutes }} នាទី</span>
            <span>{{ countdown.seconds }} វិនាទី</span>
          </div>
          <!-- Show event message when countdown reaches 0 -->
          <div v-else class="event-message">
            <p>🎊 កម្មវិធីសិរីសួស្ដីអាពាហ៍ពិពាហ៍កំពុងចាប់ផ្ដើម! 🎉</p>
          </div>
        </div>
      </div>
    </div>
    <div class="row box-btn m-0">
      <div class="col-12 mb-3 p-0">
        <i class="fa-solid fa-chevron-down fa-bounce fa-lg text-light"></i>
      </div>
      <div class="col-12 p-0">
        <!-- Button to go to Content Page -->
        <router-link to="/invitation">
          <button class="btn btn-outline-warning btn-lg open-box" @click="goToContent">
            បើកសំបុត្រ <i class="fa-solid fa-envelope fa-shake fa-lg"></i>
          </button>
        </router-link>
      </div>
    </div>
  </div>
  </div>
</template>
<style>
  .container-fluid{
    padding: 0 !important;
    overflow: hidden;
    box-sizing: border-box;
  }
  #home-box{
    width: 100% !important;
    height: 100vh;
    /* background-color:rgba(0, 0, 0, 0.3) !important; */
    position: relative;
  }
  .gradient-text{
    animation: colorChange 3s infinite;
    animation-timing-function: linear;
    animation-direction: alternate;
  }
  /* Home page styling */
  .home-container {
    text-align: center;
    padding: 20px;
  }
  /* Countdown Timer */
  .countdown {
    background:rgba(227, 242, 253, 0.14); /* Light sky blue background */
    padding: 20px;
    border-radius: 10px;
    display: inline-block;
    margin-top: 20px;
  }

  .timer {
    display: flex;
    justify-content: center;
    gap: 15px;
    font-size: 20px;
    font-weight: bold;
  }

  .timer span {
    animation: backgroundColorChange 5s infinite;
    animation-timing-function: linear;
    animation-direction: alternate;
    color: white;
    padding: 10px 15px;
    border-radius: 5px;
    font-family: "Kantumruy Pro";
  }

  /* Event Message with Beating Effect */
  .event-message {
    font-size: 20px;
    font-weight: bold;
    color: #fff;
    animation: beat 1s infinite alternate ease-in-out;
  }

  @keyframes beat {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.2);
    }
  }

  #home-box .box-btn{
    width: 100%;
    position: absolute;
    top: 90%;
    left: 50%;
    transform: translate(-50%, -90%);
    text-align: center;
  }
  .open-box{
    animation: backgroundColorChange 5s infinite;
    animation-timing-function: linear;
    animation-direction: alternate;
    /* width: 20%; */
  }
</style>