<template>
  <div class="container-fluid">
  <div class="container p-0" id="home-box">
    <div class="row box-btn m-0">
      <div class="col-12 p-0 mb-5">
        <h1 class="gradient-text">សិរីមង្គលអាពាហ៍ពិពាហ៍</h1>
      </div>
      <div class="col-12 mb-3 p-0">
        <i class="fa-solid fa-chevron-down fa-bounce fa-lg text-light"></i>
      </div>
      <div class="col-12 p-0">
        <button type="button" class="btn btn-outline-warning btn-lg open-box">
          <a @click="$router.push('/invitation')" class="text-warning text-decoration-none">
          បើកសំបុត្រ <i class="fa-solid fa-envelope fa-shake fa-lg"></i>
          </a>
        </button>
      </div>
    </div>
  </div>
  </div>
</template>
<style>
  .container-fluid{
    padding: 0 !important;
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
  #home-box .box-btn{
    width: 100%;
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -70%);
    text-align: center;
  }
  .open-box{
    animation: backgroundColorChange 5s infinite;
    animation-timing-function: linear;
    animation-direction: alternate;
    width: 70%;
  }
</style>