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
import { audioBus } from "../../helpers/eventBus";
import { swiperParam } from "../../helpers/utils";

register();

const swiperContainer = ref(null);
const swiperContainerNest = ref(null);
const prikbordOpen = ref(true);
const coordVideo = ref(null);

onMounted(() => {
    audioBus.on("playBackground", "bg__intro");

    Object.assign(swiperContainerNest.value, {
        ...swiperParam,
        speed: 3000,
        pagination: true,
    });

    swiperContainerNest.value.initialize();

    if(!prikbordOpen.value) {
        coordVideo.value.play();
    }
});


const onMenuClose = () => {
    console.log("closed menu");
    window.setTimeout(function () {
        coordVideo.value.play();
    }, 1000)
}

</script>

<template>

    <main>
        <Prikbord v-model="prikbordOpen" @close="onMenuClose" />

        <swiper-container class="mySwiper2" ref="swiperContainerNest" init="false">
            <swiper-slide class="slide--auto" v-if="!prikbordOpen">
                <Page class="page--fullwidth">
                    <img class="frame__asset" src="@assets/ch-1-p-2_frame_1/asset-01.jpg" alt="">
                    <video class="frame__video" playsinline muted style="height: 90px" ref="coordVideo">
                        <source src="@assets/ch-1-p-2_frame_1/animation.mov" type='video/mp4; codecs="hvc1"'>
                        <source src="@assets/ch-1-p-2_frame_1/animation-vp9-chrome.webm" type="video/webm">
                    </video>
                </Page>
            </swiper-slide>
            <swiper-slide class="slide--auto" v-if="!prikbordOpen">
                <Page class="page--fullwidth">
                    <img class="frame__asset" src="@assets/ch-1-p-2_frame_1/asset-02.jpg" alt="">
                </Page>
            </swiper-slide>
            <swiper-slide class="slide--auto" v-if="!prikbordOpen">
                <Page class="page--fullwidth">
                    <img class="frame__asset" src="@assets/ch-1-p-2_frame_1/asset-03.jpg" alt="">
                </Page>
            </swiper-slide>
            <swiper-slide class="slide--auto" v-if="!prikbordOpen">
                <Page class="page--fullwidth">
                    <img class="frame__asset" src="@assets/ch-1-p-2_frame_1/asset-04.jpg" alt="">
                </Page>
            </swiper-slide>

            <nextPage to="/chapter-1/page-3.html" />

        </swiper-container>


    </main>
</template>