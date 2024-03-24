<script setup>
    import { isDrawer} from '../router/store'
    const hideDrawer = ()=>{
        isDrawer.value = false
    }
</script>
<template>
    <div class="popup" v-if="isDrawer" @click="hideDrawer()">

    </div>
</template>
<style>
    .popup{
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        left: 0;
        z-index: 3;
    }
</style>