import {ref} from 'vue'
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
        designers: ["Chan Vannak","Phol Dyna","Sok Koemsien"]
    },
    {
        brand: "CANA SECURITIES CO.,LTD",
        img: "/achievements/02.jpg",
        type: "Normal",
        designers: ["Sopha","Phanoy"]
    },
    {
        brand: "DW Brand",
        img: "/achievements/03.jpg",
        type: "Normal",
        designers: ["Raingsey","J Mean"]
    },
    {
        brand: "HW Brand",
        img: "/achievements/04.jpg",
        type: "Normal",
        designers: ["Chanra","Chanthorn"]
    },
    {
        brand: "MONIROTH",
        img: "/achievements/05.jpg",
        type: "Normal",
        designers: ["Chan Vannak","Sok Koemsien"]
    },
    {
        brand: "REBACCA",
        img: "/achievements/06.jpg",
        type: "Normal",
        designers: ["Phol Dyna","Sok Koemsien"]
    },
    {
        brand: "TRE Brand",
        img: "/achievements/07.jpg",
        type: "Normal",
        designers: ["Chan Vannak","Chanra","J Mean"]
    },
])
export const designerList = ref([
    {
        name: "Chan Vannak",
        position: "Design Manager",
        img: "/staff/vannak.jpg",
    },
    {
        name: "Phol Dyna",
        position: "Graphic Desinger",
        img: "/staff/dyna.jpg",
    },
    {
        name: "Sok Koemsien",
        position: "Graphic Desinger",
        img: "/staff/koemsien.jpg",
    },
    {
        name: "Kann Sokmean",
        position: "Graphic Desinger",
        img: "/staff/sokmean.jpg",
    },
    {
        name: "Mun Chanra",
        position: "Graphic Desinger",
        img: "/staff/chanra.jpg",
    },
    {
        name: "Chea Sopha",
        position: "Graphic Desinger",
        img: "/staff/Sopha.jpg",
    },
    {
        name: "Rith Phanoy",
        position: "Graphic Desinger",
        img: "/staff/phanoy.jpg",
    },
    {
        name: "LOK Kimreachraingsey",
        position: "Graphic Desinger",
        img: "/staff/raingsey.jpg",
    },
    {
        name: "No name available",
        position: "Graphic Desinger",
        img: "/staff/no-image-available.png",
    }
])