<script setup>
    import { isChat } from '../router/store';
    const setChat = ()=>{
        isChat.value = !isChat.value
    }
</script>
<template>
    <div class="chat-box">
        <div class="message" @click="setChat()">
            <i class="fa-brands fa-facebook-messenger"></i>
        </div>
    </div>
</template>
<style scoped>
    .chat-box{
        width: 60px;
        height: 60px;
        background-color: green;
        position: fixed;
        border-radius: 50%;
        right: 2%;
        bottom: 4%;
        z-index: 100;
    }
    .chat-box .message{
        width: 100%;
        height: 100%;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
    .chat-box .message i{
        color: #fff;
        font-size: 35px;
    }
    .box{
        width: 200px;
        height: 300px;
        background-color: green;
    }
</style>