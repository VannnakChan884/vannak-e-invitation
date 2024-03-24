<script setup>
    import { MenuList, isChat } from '../router/store';
    const hideChat = ()=>{
        isChat.value = false
    }
</script>
<template>
    <div class="friendList" :class="{'isChat': isChat}">
        <div class="row chat-header m-0">
            <div class="col-lg-6 logo">
                <img src="/src/assets/logo.png" alt="">
            </div>
            <div class="col-lg-6  chat-action">
                <ul>
                    <li><i class="fa-solid fa-ellipsis"></i></li>
                    <li @click="hideChat()"><i class="fa-solid fa-minus"></i></li>
                </ul>
            </div>
        </div>
        <div class="chat-body">
            <ul>
                <li v-for="(menu, i) in MenuList" :key="i">
                    <img src="" alt="">
                    <span>{{menu.name}}</span>
                </li>
            </ul>
        </div>
        <div class="chat-footer">
            <span style="margin-right: 5px;"><i class="fa-brands fa-facebook-messenger"></i></span>
            <span style="font-size: 13px; font-weight: 500;">Powered by Messenger</span>
        </div>
    </div>
</template>
<style scoped>
    .friendList{
        width: 360px;
        /* height: 350px; */
        background-color: #f9f9f9;
        box-shadow: -6px 3px 10px rgba(0, 128, 0, 0.4);
        padding: 10px;
        position: fixed;
        bottom: -500px;
        right: 2%;
        z-index: 101;
        border-radius: 15px;
        overflow: hidden;
    }
    .friendList .chat-header{
        width: 100%;
        margin: auto;
        margin-bottom: 7px;
        border-bottom: 1px solid greenyellow;
    }
    .friendList .chat-header .logo{
        width: 35%;
        height: 100%;
        display: flex;
        justify-content: left;
        align-items: center;
        padding-bottom: 7px;
    }
    .friendList .chat-header .logo img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .friendList .chat-header .chat-action{
        width: 65%;
        display: flex;
        justify-content: right;
        align-items: center;
        margin: 0;
    }
    .friendList .chat-header .chat-action ul{
        display: flex;
        gap: 6px;
    }
    .friendList .chat-header .chat-action ul li{
        width: 30px;
        height: 30px;
        background-color: #eee;
        float: left;
        border-radius: 50%;
        cursor: pointer;
    }
    .friendList ul li{
        padding: 9px;
        display: flex;
        gap: 6px;
        align-items: center;
        cursor: pointer;
    }
    .friendList ul li:hover{
        background-color: green;
    }
    .friendList ul li img{
        width: 39px;
        height: 39px;
        object-fit: cover;
        border-radius: 50%;
    }
    .friendList ul li span{
        font-size: 15px;
        color: #333;
    }
    .isChat{
        bottom: 110px;
    }
    .friendList .chat-footer{
        width: 100%;
        margin: auto;
        margin-top: 7px;
        border-top: 1px solid greenyellow;
        padding: 7px 0;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>