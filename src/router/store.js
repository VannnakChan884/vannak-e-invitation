import { ref } from 'vue'
export const MenuList = ref([
    {
        id: 1,
        name: "Achievement",
        route: '/achievement',
        isActive: false,
    },
    {
        id: 2,
        name: "Brand",
        route: '/brand',
        isActive: false,
    },
    {
        id: 3,
        name: "About Me",
        route: '/about',
        isActive: false,
    },
    {
        id: 4,
        name: "Contact Me",
        route: '/contact',
        isActive: false,
    },
])
export const slides = ref([
    "/img/01.jpg",
    "/img/02.png",
    "/img/03.jpg",
    "/img/04.jpg",
    "/img/05.jpg",
])
export const isDrawer = ref(false)
export const isChat = ref(false)
export const clientList = ref([
    "/logos/client logo_CCN.jpg",
    "/logos/client logo_CNS.jpg",
    "/logos/client logo_DW.jpg",
    "/logos/client logo_FF.jpg",
    "/logos/client logo_GM.jpg",
    "/logos/client logo_HW.jpg",
    "/logos/client logo_JC.jpg",
    "/logos/client logo_LG.jpg",
    "/logos/client logo_M.jpg",
    "/logos/client logo_RB.jpg",
    "/logos/client logo_RBC.jpg",
    "/logos/client logo_RYD.jpg",
    "/logos/client logo_SL.jpg",
    "/logos/client logo_SPK.jpg",
    "/logos/client logo_TRE.jpg",
    "/logos/client logo_VLCC.jpg",
])
export const achievementList = ref([
    {
        brand: "ALEXZA",
        img: "/achievements/01.jpg",
        type: "VIP",
        designers: ["Chan Vannak", "Phol Dyna", "Sok Koemsien"]
    },
    {
        brand: "CANA SECURITIES CO.,LTD",
        img: "/achievements/02.jpg",
        type: "Normal",
        designers: ["Sopha", "Phanoy"]
    },
    {
        brand: "DW Brand",
        img: "/achievements/03.jpg",
        type: "Normal",
        designers: ["Raingsey", "J Mean"]
    },
    {
        brand: "HW Brand",
        img: "/achievements/04.jpg",
        type: "Normal",
        designers: ["Chanra", "Chanthorn"]
    },
    {
        brand: "MONIROTH",
        img: "/achievements/05.jpg",
        type: "Normal",
        designers: ["Chan Vannak", "Sok Koemsien"]
    },
    {
        brand: "REBACCA",
        img: "/achievements/06.jpg",
        type: "Normal",
        designers: ["Phol Dyna", "Sok Koemsien"]
    },
    {
        brand: "TRE Brand",
        img: "/achievements/07.jpg",
        type: "Normal",
        designers: ["Chan Vannak", "Chanra", "J Mean"]
    },
    {
        brand: "JL Brand",
        img: "/achievements/08.jpg",
        type: "Normal",
        designers: ["Chan Vannak"]
    },
    {
        brand: "Pearl Nail Salon",
        img: "/achievements/09.jpg",
        type: "Normal",
        designers: ["Chan Vannak"]
    },
    {
        brand: "Preap Sovath Brand",
        img: "/achievements/11.jpg",
        type: "VIP",
        designers: ["Chan Vannak"]
    },
    {
        brand: "Rosseta Brand",
        img: "/achievements/10.jpg",
        type: "Normal",
        designers: ["Chan Vannak"]
    },
    {
        brand: "VLCC Brand",
        img: "/achievements/12.jpg",
        type: "VIP",
        designers: ["Chan Vannak"]
    }
])
export const designerList = ref([
    {
        name: "Chan Vannak",
        position: "Design Manager",
        img: "/staff/vannak.JPG",
        info: "Was born in Takeo, Cambodia. Finished a Management Information System Bachelor's degree at SETEC Institute. Has been working with RBG and Graphic Design for almost 6 months at Perfect People Co., Ltd as well as Addbook Computer Centre. He believes that everyone has talents if they work hard with passion to show the results. His personal mission at RBG is “ Upgrade better version of GD Team ” His personal mission is to “ Make the world recognize Cambodian tech talents skills ”",
        showInfo: false
    },
    {
        name: "Phol Dyna",
        position: "Graphic Desinger",
        img: "/staff/dyna.jpg",
        info: "ផល ឌីណា This is the information that will be shown when the button is clicked.",
        showInfo: false
    },
    {
        name: "Sok Koemsien",
        position: "Graphic Desinger",
        img: "/staff/koemsien.jpg",
        info: "This is the information that will be shown when the button is clicked.",
        showInfo: false
    },
    {
        name: "Kann Sokmean",
        position: "Graphic Desinger",
        img: "/staff/sokmean.jpg",
        info: "This is the information that will be shown when the button is clicked.",
        showInfo: false
    },
    {
        name: "Mun Chanra",
        position: "Graphic Desinger",
        img: "/staff/chanra.jpg",
        info: "This is the information that will be shown when the button is clicked.",
        showInfo: false
    },
    {
        name: "Chea Sopha",
        position: "Graphic Desinger",
        img: "/staff/Sopha.jpg",
        info: "This is the information that will be shown when the button is clicked.",
        showInfo: false
    },
    {
        name: "Rith Phanoy",
        position: "Graphic Desinger",
        img: "/staff/phanoy.jpg",
        info: "This is the information that will be shown when the button is clicked.",
        showInfo: false
    },
    {
        name: "LOK Kimreachraingsey",
        position: "Graphic Desinger",
        img: "/staff/raingsey.jpg",
        info: "This is the information that will be shown when the button is clicked.",
        showInfo: false
    },
    {
        name: "No name available",
        position: "Graphic Desinger",
        img: "/staff/no-image-available.png",
        info: "This is the information that will be shown when the button is clicked.",
        showInfo: false
    }
])
export const socialLinks = ref({
    Facebook: {
        url: 'https://www.facebook.com/vannakchan4544/',
        icon: "fa-facebook"
    },
    Tittok: {
        url: 'https://www.tiktok.com/@vannakchan884',
        icon: "fa-tiktok"
    },
    Instagram: {
        url: 'https://www.instagram.com/vannakchan884/',
        icon: "fa-instagram"
    },
    Linkin: {
        url: 'https://www.linkedin.com/in/chan-vannak/',
        icon: "fa-linkedin-in"
    },
    Telegram: {
        url: 'https://t.me/chanvannak408',
        icon: "fa-telegram"
    }
})
export const languages = ref([
    { id: 1, code: 'en', name: 'English' },
    { id: 2, code: 'kh', name: 'Khmer' }
])