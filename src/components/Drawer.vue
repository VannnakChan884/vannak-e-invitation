<script setup>
import { ref, onMounted } from 'vue';
import { MenuList, isDrawer, languages } from "../router/store";

const showDropdown = ref(false);
const activeLanguage = ref(1); // Set the default active language ID

const toggleDropdown = () => {
    showDropdown.value = !showDropdown.value;
};

const hideDropdown = () => {
    showDropdown.value = false;
};

const selectLanguage = (langId) => {
    activeLanguage.value = langId;
    hideDropdown(); // Close the dropdown after selecting a language
};

const setDrawerMenu = () => {
    isDrawer.value = true
}

onMounted(() => {
    document.addEventListener('click', (event) => {
        if (!event.target.closest('.language')) {
            hideDropdown()
        }
    })
})

// Set the default active language ID
activeLanguage.value = 1; // set English as the default active language

</script>
<template>
    <div class="drawer" :class="{ isDrawer: isDrawer }">
        <div class="drawer-box">
            <div class="logo">
                <RouterLink to="/"><img src="/src/assets/logo.png" alt="" /></RouterLink>
            </div>
            <div class="menu">
                <ul>
                    <li v-for="(menu, i) in MenuList" :key="i">
                        <RouterLink :to="menu.route">{{ menu.name }}</RouterLink>
                    </li>
                </ul>
            </div>
            <div class="language mt-3">
                <div class="language-box" @click="toggleDropdown">
                    <i class="fa-solid fa-language"></i>
                    <span>Language</span>
                </div>
                <ul v-show="showDropdown" @click="hideDropdown" class="dropdown-list">
                    <li class="dropdown-list-heading">
                        <h6>TRANSLATIONS</h6>
                    </li>
                    <li v-for="lang in languages" :key="lang.id" @click="selectLanguage(lang.id)"
                        :class="{ active: lang.id === activeLanguage }">
                        <a href="#">{{ lang.name }}</a>
                    </li>
                </ul>
            </div>
            <div class="footer">
                <h1>Follow Me</h1>
                <div class="social-media">
                    <div class="link">
                        <a href="https://www.facebook.com/vannakchan4544/" target="_blank">
                            <i class="fa-brands fa-facebook"></i>
                        </a>
                    </div>
                    <div class="link">
                        <a href="https://t.me/chanvannak408" target="_blank">
                            <i class="fa-brands fa-telegram"></i>
                        </a>
                    </div>
                    <div class="link">
                        <a href="https://www.tiktok.com/@vannakchan884" target="_blank">
                            <i class="fa-brands fa-tiktok"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.drawer {
    width: 280px;
    height: 100%;
    position: fixed;
    top: 0;
    left: -300px;
    background-image: linear-gradient(green, white);
    box-shadow: 6px 0 30px rgba(0, 128, 0, 0.4);
    transition: 0.3s;
    z-index: 4;
}

.drawer .logo {
    width: 100%;
    height: 130px;
    overflow: hidden;
    border-bottom: 1px solid greenyellow;
    margin-bottom: 20px;
}

.drawer .logo a {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.drawer .logo img {
    width: 50%;
    object-fit: cover;
    cursor: pointer;
}

.drawer .drawer-box .menu {
    width: 90%;
    margin: auto;
}

.drawer .drawer-box .menu ul li {
    border-bottom: 1px solid greenyellow;
}

.drawer .drawer-box .menu ul li:last-child {
    border-bottom: none;
}

.drawer .drawer-box .menu ul li a {
    display: block;
    padding: 9px;
    color: #fff;
    text-decoration: none;
    cursor: pointer;
}

.language {
    width: 100%;
    border-top: 1px solid greenyellow;
    padding: 15px 0 5px 0;
    position: relative;
}

.language .language-box {
    /* float: right; */
    cursor: pointer;
    color: #fff;
    display: flex;
    justify-content: left;
    align-items: center;
    padding: 10px 20px;
}

.language .language-box i {
    font-size: 28px;
    padding-right: 12px;
}

.language .language-box span {
    font-size: 18px;
}

.language .language-box:hover {
    background-color: green;
}

/* Submenu Style */
.dropdown-list {
    border-radius: 10px;
    position: absolute;
    top: 100%;
    right: -20%;
    background-color: #fff;
    list-style-type: none;
    padding: 8px;
    box-shadow: 0 2px 5px rgba(0, 128, 0, 0.5);
    z-index: 200;
}

.dropdown-list li {
    width: 100%;
    clear: both;
    border-radius: 0 !important;
    padding: 2px 5px;
}

.dropdown-list li a {
    display: block;
    padding: 5px 8px;
    color: #333;
    text-decoration: none;
    border-radius: 8px;
    font-size: 13px;
}

.dropdown-list li a:hover {
    background-color: rgba(0, 128, 0, 0.3);
}

.dropdown-list li h6 {
    font-size: 14px;
    padding: 5px 8px;
    font-weight: 600;
    margin: 8px 0;
}

.dropdown-list li.dropdown-list-heading a:hover {
    background-color: transparent;
}

.dropdown-list li.active a {
    background-color: green;
    color: #fff;
    border-radius: 8px;
}

.isDrawer {
    left: 0;
}

.drawer .drawer-box .footer {
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    border-top: 1px solid greenyellow;
}

.drawer .drawer-box .footer h1 {
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: 18px;
    text-align: center;
}

.drawer .drawer-box .footer .social-media {
    width: 90%;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 9px;
    padding-bottom: 10px;
}

.drawer .drawer-box .footer .social-media .link {
    width: 45px;
    height: 45px;
    background-color: green;
    border-radius: 50%;
}

.drawer .drawer-box .footer .social-media .link a {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    border-radius: 50%;
}

.drawer .drawer-box .footer .social-media .link i {
    color: #fff;
    font-size: 25px;
}

/* Extra small devices(portrait phones, less than 576px) */
@media (max-width: 575.98px) {
    .drawer {
        width: 60%;
    }
}
</style>
