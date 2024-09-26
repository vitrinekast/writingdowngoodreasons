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


        <Prikbord />
        <swiper-container class="mySwiper2" ref="swiperContainerNest" init="false">
            <swiper-slide>
                <Page class="page--fullwidth">
                    <img class="frame__asset" src="@assets/ch-1-p-2_frame_1/asset-01.jpg" alt="">
                </Page>
            </swiper-slide>
            <swiper-slide>
                <Page class="page--fullwidth">
                    <img class="frame__asset" src="@assets/ch-1-p-2_frame_1/asset-02.jpg" alt="">
                </Page>
            </swiper-slide>
            <swiper-slide>
                <Page class="page--fullwidth">
                    <img class="frame__asset" src="@assets/ch-1-p-2_frame_1/asset-03.jpg" alt="">
                </Page>
            </swiper-slide>
            <swiper-slide>
                <Page class="page--fullwidth">
                    <img class="frame__asset" src="@assets/ch-1-p-2_frame_1/asset-04.jpg" alt="">
                </Page>
            </swiper-slide>

            <NextPage />

        </swiper-container>


    </main>
</template>

<style scoped>
swiper-container,
.swiper-container {
    height: 100svh;
    overflow: hidden;
}


swiper-slide,
.swiper-slide {
    height: auto;
    border: 2px solid red;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: #e8e3d1; */

    &.swiper-slide-active {
        border-color: pink;
    }
}



.slide--250 {
    height: 250px !important;
    display: flex;
    flex-direction: column;
}



swiper-container::part(bullet-active) {
    background: url("@/assets/icons/icon__pagination-active.png");
    background-size: contain;
}

swiper-container::part(bullet) {
    background: url("@/assets/icons/icon__pagination.png");
    background-size: contain;
}
</style>
