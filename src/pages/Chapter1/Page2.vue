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
const prikbordOpen = ref(false);
const coordVideo = ref(null);

onMounted(() => {
    audioBus.on("playBackground", "bg__intro");

    Object.assign(swiperContainerNest.value, {
        ...swiperParam,
        speed: 3000,
        centeredSlides: true,
        pagination: true,
    });

    swiperContainerNest.value.initialize();

    if (!prikbordOpen.value) {
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

    <main class='background--lightblue'>
        <Prikbord v-model="prikbordOpen" @close="onMenuClose" />

        <swiper-container class="mySwiper2" ref="swiperContainerNest" init="false">
            <swiper-slide class="slide--100" v-if="!prikbordOpen">
                <Page class="page--fullwidth">
                    <img class="frame__asset" src="@assets/ch-1-p-2_frame_1/part1.webp" alt="">
                    <video class="frame__video" playsinline muted style="height: 90px" ref="coordVideo">
                        <source src="@assets/ch-1-p-2_frame_1/animation.mov" type='video/mp4; codecs="hvc1"'>
                        <source src="@assets/ch-1-p-2_frame_1/animation-vp9-chrome.webm" type="video/webm">
                    </video>
                </Page>
            </swiper-slide>
            <swiper-slide class="slide--auto" v-if="!prikbordOpen">
                <Page class="page--fullwidth">
                    <img class="frame__overlay" src="@assets/ch-1-p-2_frame_1/part2--feet.webp" alt="">
                    <img class="frame__asset" src="@assets/ch-1-p-2_frame_1/part2.webp" alt="">
                </Page>
            </swiper-slide>
            <swiper-slide data-swiper-parallax class="slide--auto flex--center background--base" v-if="!prikbordOpen">
                <Page class="page--fullwidth">

                    <Frame class="frame--1" data-swiper-parallax>
                        <img loading='lazy' src="@assets/ch-1-p-2_frame_1/frame1.png" alt="" class="frame__asset">
                    </Frame>
                    <img class="frame__asset text--1" src="@assets/ch-1-p-2_frame_1/tekst1.png" alt="">
                    <img class="frame__asset" data-exclude-parallax src="@assets/ch-1-p-2_frame_1/part3.png" alt="">
                </Page>
            </swiper-slide>

            <swiper-slide data-swiper-parallax class="slide--auto flex--center background--base">
                <Page size="sm">

                    <div class="grid">
                        <Frame size="sm" class="cell cell--w-3" data-swiper-parallax>
                            <img class="frame__asset--contain" src="@assets/ch-1-p-2_frame_1/frame2.webp" alt="">
                        </Frame>

                        <Frame size="sm" class="cell cell--w-3" data-swiper-parallax>
                            <img class="frame__asset--contain" src="@assets/ch-1-p-2_frame_1/frame3.webp" alt="">
                        </Frame>
                    </div>
                </Page>
            </swiper-slide>
            <nextPage to="/chapter-1/page-3.html" />

        </swiper-container>


    </main>
</template>

<style scoped>
.frame--1,
.text--1 {
    position: absolute;
    left: 1rem;
    top: 20%;
    height: 150px;
}

.text--1 {
    top: calc(20% + 150px);
    width: 100%;
    max-width: 50%;
    left: calc(1rem + 1rem);
    object-fit: contain;
    height: 50px;
}
</style>