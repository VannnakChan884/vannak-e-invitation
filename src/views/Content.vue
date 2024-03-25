<script setup>
import Drawer from "../components/Drawer.vue";
import Popup from "../components/Popup.vue";
import Slide from "../components/Slide.vue";
import Achievement from "../components/Achievements.vue";
import ClientList from "../components/clientList.vue";
import ChatBox from "../components/Chat.vue";
import FriendList from "../components/friendList.vue";
import Footer from "../components/Footer.vue";
import GotoTop from "../components/GoToTop.vue";
</script>
<template>
  <div class="body-content">
    <Drawer />
    <Popup />
    <Slide />
    <Achievement />
    <ClientList />
    <ChatBox />
    <FriendList />
    <GotoTop />
    <Footer />
  </div>
</template>
<style scoped>
.body-content {
  overflow: hidden;
}
</style>