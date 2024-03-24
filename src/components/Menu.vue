<script setup>
    import { MenuList, isDrawer} from '../router/store.js'
    const setDrawerMenu = ()=>{
        isDrawer.value = true
    }
</script>
<template>
    <div class="container-fluid menu-bar">
        <div class="container">
            <div class="row">
                <div class="col-xxl-12 col-xl-12 col-lg-12 menu-box">
                    <div class="logo">
                        <RouterLink to="/"><img src="/src/assets/logo.png" alt=""></RouterLink>
                    </div>
                    <div class="menu">
                        <ul>
                            <li v-for="(menu, i) in MenuList" :key="i" class="menu-list">
                                <RouterLink :to="menu.route">{{ menu.name }}</RouterLink>
                            </li>
                            <li class="hamburger-menu">
                                <a @click="setDrawerMenu()"><i class="fa-solid fa-bars"></i></a>
                            </li>
                        </ul>
                    </div>
                    <div class="menu-action">
                        <ul>
                            <li><i class="fa-solid fa-language"></i></li>
                            <li><i class="fa-regular fa-bell"></i></li>
                            <li><i class="fa-regular fa-user"></i></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .menu-bar{
        margin-top: 20px;
        margin-bottom: 15px;
        position: sticky;
        top: 20px;
        z-index: 2;
    }
    .menu-bar .menu-box{
        width: 100%;
        background-color: #f9f9f9;
        box-shadow: 4px 6px 25px rgba(0, 128, 0, 0.4);
        border-radius: 13px;
        padding: 5px 10px;
        display: flex;
        align-items: center;
    }
    .menu-bar .menu-box .logo{
        width: 25%;
        float: left;
    }
    .menu-bar .menu-box .logo a{
        cursor: pointer;
    }
    .menu-bar .menu-box .logo img{
        height: 50px;
    }
    .menu-bar .menu-box .menu{
        width: 60%;
        float: left;
    }
    .menu-bar .menu-box .menu ul{
        float: right;
    }
    .menu-bar .menu-box .menu ul li{
        float: left;
    }
    .menu-bar .menu-box .menu ul li .router-link-active{
        color: green;
        font-weight: 600;
    }
    .menu-bar .menu-box .menu ul li a{
        display: block;
        padding: 18px;
        color: #333;
        text-decoration: none;
        font-size: 18px;
        font-weight: 500;
        cursor: pointer;
    }
    .menu-bar .menu-box .menu ul li a:hover{
        color: green;
    }
    .menu-bar .menu-box .menu-action{
        width: 15%;
        border-left: 1px solid greenyellow;
    }
    .menu-bar .menu-box .menu-action ul{
        float: right;
    }
    .menu-bar .menu-box .menu-action ul li{
        float: left;
        border-radius: 50%;
    }
    .menu-bar .menu-box .menu-action ul li i{
        display: block;
        padding: 18px;
        color: #333;
        text-decoration: none;
        font-size: 20px;
        cursor: pointer;
    }
    .menu-bar .menu-box .menu-action ul li:hover{
        background-color: greenyellow;
    }
</style>