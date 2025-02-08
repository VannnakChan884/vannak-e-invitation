<template>
  <div class="container-fluid" id="home-box">
    <div class="row box-btn">
      <div class="col-12 mb-3">
        <i class="fa-solid fa-chevron-down fa-bounce fa-lg text-warning"></i>
      </div>
      <div class="col-12">
        <button type="button" class="btn btn-outline-warning btn-lg open-box">
          <a @click="$router.push('/invitation')" class="text-warning text-decoration-none">
          បើកសំបុត្រ <i class="fa-solid fa-envelope fa-shake fa-lg"></i>
          </a>
        </button>
      </div>
    </div>
  </div>
</template>
<style>
  #home-box{
    width: 100%;
    height: 100vh;
    background-color:#000000a9 !important;
    position: relative;
  }
  #home-box .box-btn{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }
  .open-box{
    animation: backgroundColorChange 5s infinite;
    animation-timing-function: linear;
    animation-direction: alternate;
  }
</style>