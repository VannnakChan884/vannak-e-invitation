<script setup>
import { ref, onMounted } from 'vue';
import { MenuList, isDrawer, languages } from '../router/store.js'

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
        if (!event.target.closest('.language-dropdown')) {
            hideDropdown()
        }
    })
})

// Set the default active language ID
activeLanguage.value = 1; // set English as the default active language

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
                            <li class="language-dropdown">
                                <button class="language-btn" @click="toggleDropdown">
                                    <i class="fa-solid fa-language"></i>
                                </button>
                                <ul v-show="showDropdown" @click="hideDropdown" class="dropdown-list">
                                    <li class="dropdown-list-heading">
                                        <h6>TRANSLATIONS</h6>
                                    </li>
                                    <li v-for="lang in languages" :key="lang.id" @click="selectLanguage(lang.id)"
                                        :class="{ active: lang.id === activeLanguage }">
                                        <a href="#">{{ lang.name }}</a>
                                    </li>
                                </ul>
                            </li>
                            <li class="language-dropdown">
                                <button class="language-btn">
                                    <i class="fa-regular fa-bell"></i>
                                </button>
                            </li>
                            <li class="language-dropdown">
                                <button class="language-btn">
                                    <i class="fa-regular fa-user"></i>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.menu-bar {
    margin-top: 20px;
    margin-bottom: 15px;
    position: sticky;
    top: 20px;
    z-index: 2;
}

.menu-bar .menu-box {
    width: 100%;
    background-color: #f9f9f9;
    box-shadow: 4px 6px 25px rgba(0, 128, 0, 0.4);
    border-radius: 13px;
    padding: 5px 10px;
    display: flex;
    align-items: center;
}

/* Main menu logo */
.menu-bar .menu-box .logo {
    width: 25%;
    float: left;
}

.menu-bar .menu-box .logo a {
    cursor: pointer;
}

.menu-bar .menu-box .logo img {
    height: 50px;
}

/* Main menu list */
.menu-bar .menu-box .menu {
    width: 60%;
    float: left;
}

.menu-bar .menu-box .menu ul {
    float: right;
}

.menu-bar .menu-box .menu ul li {
    float: left;
}

.menu-bar .menu-box .menu ul li .router-link-active {
    color: green;
    font-weight: 600;
}

.menu-bar .menu-box .menu ul li a {
    display: block;
    padding: 18px;
    color: #333;
    text-decoration: none;
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
}

.menu-bar .menu-box .menu ul li a:hover {
    color: green;
}

/* Main munu button */
.menu-action {
    width: 15%;
    border-left: 1px solid greenyellow;
    position: relative;
}

.menu-action ul {
    float: right;
}

.menu-action ul .language-dropdown {
    float: left;
    border-radius: 50%;
    position: relative;
    padding: 5px;
}

.menu-action ul .language-dropdown .language-btn {
    border: none;
    cursor: pointer;
    border-radius: 50%;
    background-color: transparent;
    display: flex;
    width: 50px;
    height: 50px;
    justify-content: center;
    align-items: center;
}

.menu-action ul .language-dropdown .language-btn i {
    color: #333;
    font-size: 20px;
}

.menu-action ul .language-dropdown .language-btn:hover {
    background-color: rgba(0, 128, 0, 0.3);
}

/* Submenu Style */
.dropdown-list {
    border-radius: 10px;
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 10px;
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
</style>