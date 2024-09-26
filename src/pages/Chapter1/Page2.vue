<script setup>
import Page from "@/components/Page.vue";
import 'swiper/css';
import 'swiper/css/effect-creative';
import { register } from 'swiper/element/bundle';
import 'swiper/element/css/mousewheel';
import 'swiper/element/css/pagination';
import { onMounted, ref } from 'vue';
import Prikbord from "../../components/Prikbord.vue";
import NextPage from "../../components/nextPage.vue";
import { swiperParam } from "../../utils";

register();

const swiperContainer = ref(null);
const swiperContainerNest = ref(null);
const prikbordOpen = ref(true);

onMounted(() => {

    Object.assign(swiperContainerNest.value, {
        ...swiperParam,
        speed: 3000,
        pagination: true,
    });

    swiperContainerNest.value.initialize();
});


const onMenuClose = () => {
    console.log("closed menu");
}
</script>

<template>

    <main>

        <Prikbord v-model="prikbordOpen" @close="onMenuClose" />

        <swiper-container class="mySwiper2" ref="swiperContainerNest" init="false">
            <swiper-slide class="slide--auto">
                <Page class="page--fullwidth">
                    <img class="frame__asset" src="@assets/ch-1-p-2_frame_1/asset-01.jpg" alt="">
                </Page>
            </swiper-slide>
            <swiper-slide class="slide--auto">
                <Page class="page--fullwidth">
                    <img class="frame__asset" src="@assets/ch-1-p-2_frame_1/asset-02.jpg" alt="">
                </Page>
            </swiper-slide>
            <swiper-slide class="slide--auto">
                <Page class="page--fullwidth">
                    <img class="frame__asset" src="@assets/ch-1-p-2_frame_1/asset-03.jpg" alt="">
                </Page>
            </swiper-slide>
            <swiper-slide class="slide--auto">
                <Page class="page--fullwidth">
                    <img class="frame__asset" src="@assets/ch-1-p-2_frame_1/asset-04.jpg" alt="">
                </Page>
            </swiper-slide>

            <NextPage />

        </swiper-container>


    </main>
</template>