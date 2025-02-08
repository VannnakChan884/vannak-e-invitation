<template>
  <div class="container" id="home-box">
    <div class="row box-btn">
      <div class="col-12 mb-3">
        <i class="fa-solid fa-chevron-down fa-bounce fa-lg text-warning"></i>
      </div>
      <div class="col-12">
        <a @click="$router.push('/invitation')" class="btn btn-warning btn-lg open-btn" type="button">បើកសំបុត្រ</a>
      </div>
    </div>
  </div>
</template>
<style scope>
  #home-box{
    width: 100%;
    height: 100vh;
  }
  #home-box .box-btn{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }
  .open-btn{
    padding: 10px 50px;
  }
</style>