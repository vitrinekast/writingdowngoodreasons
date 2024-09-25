<script setup>
import Page from "@/components/Page.vue";
import 'swiper/css';
import 'swiper/css/effect-creative';
import { register } from 'swiper/element/bundle';
import 'swiper/element/css/mousewheel';
import 'swiper/element/css/pagination';
import { EffectCreative, Keyboard, Mousewheel, Navigation } from 'swiper/modules';
import { onMounted, ref } from 'vue';
import Prikbord from "../../components/Prikbord.vue";
import NextPage from "../../components/nextPage.vue";

register();


const modules = [Keyboard, Mousewheel, EffectCreative, Navigation];
const swiperContainer = ref(null);
const swiperContainerNest = ref(null);


// swiper parameters
const swiperParams = {
    slidesPerView: "auto",
    speed: 3000,
    keyboard: true,
    direction: 'vertical',
    mousewheel: true,
    pagination: true,
    navigation: false,
    centeredSlides: true,
    centeredSlidesBounds: true,
    grabCursor: true,
    modules: modules,
};

onMounted(() => {

    Object.assign(swiperContainerNest.value, swiperParams);


    swiperContainerNest.value.initialize();



});


</script>

<template>

    <main>
        hier komt een slider
        <input type="range" min="0" max="100" step="1" value="20">

    </main>
</template>

<style scoped>


</style>
