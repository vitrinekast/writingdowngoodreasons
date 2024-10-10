<script setup>
import Page from "@/components/Page.vue";
import 'swiper/css';
import 'swiper/css/effect-creative';
import { register } from 'swiper/element/bundle';
import 'swiper/element/css/mousewheel';
import 'swiper/element/css/pagination';
import { onMounted, ref } from 'vue';
import head_1 from '../../assets/images/ch-1-p-3_frame_1/frame_asset-1.png';
import head_2 from '../../assets/images/ch-1-p-3_frame_1/frame_asset-2.png';
import head_3 from '../../assets/images/ch-1-p-3_frame_1/frame_asset-3.png';
import head_4 from '../../assets/images/ch-1-p-3_frame_1/frame_asset-4.png';
import Prikbord from "../../components/Prikbord.vue";
import NextPage from "../../components/nextPage.vue";
import { audioBus } from "../../helpers/eventBus";
import { mapNumRange, swiperParam } from "../../helpers/utils";

register();

const swiperContainer = ref(null);
const swiperContainerNest = ref(null);
const prikbordOpen = ref(false);
const coordVideo = ref(null);
const turnIndex = ref(0);
const pageState = ref(0);
const images = [head_1, head_2, head_3, head_4];

onMounted(() => {
    console.log("onMounted page2.vue");
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
    window.setTimeout(function () {
        coordVideo.value.play();
    }, 1000)
}

const onchange = (e) => {
    const v = Math.round(mapNumRange(e.target.value, 0, 100, 0, 3));

    if (v !== turnIndex.value) {
        turnIndex.value = v;
    }

    if (e.target.value > 90 && pageState.value === 0) {
        window.setTimeout(() => {
            pageState.value = 1;
            pageC.value.swiper.slideNext();
        }, 1000)

        window.setTimeout(() => {
            pageState.value = 2;
            pageC.value.swiper.slideNext();
        }, 5000)
    }
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
            <swiper-slide data-swiper-parallax class="slide--auto background--base" v-if="!prikbordOpen">
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
                        <Frame class="cell cell--w-3" data-swiper-parallax>
                            <img class="frame__asset--contain" src="@assets/ch-1-p-2_frame_1/frame2.webp" alt="">
                        </Frame>

                        <Frame class="cell cell--w-3" data-swiper-parallax>
                            <img class="frame__asset--contain" src="@assets/ch-1-p-2_frame_1/frame3.webp" alt="">
                        </Frame>
                    </div>
                </Page>
            </swiper-slide>

            <swiper-slide class="slide--xs background--base" :style="{ opacity: 1 }">
                <Page size="sm">
                    <div class="grid grid--center">
                        <Frame class="cell cell--w-3 cell--100">
                            <div v-for="(item, index) in images" :key="index" :data-index="index"
                                :style="{ opacity: index == turnIndex ? 1 : 0, transitionDelay: index == turnIndex ? 2.51 : 0 }"
                                class="frame__element stretch">
                                <img loading='lazy' :src="item" alt="" class="frame__asset--contain stretch">
                            </div>
                        </Frame>
                        <Frame class="cell cell--w-3">
                            <img loading='lazy' src="@assets/ch-1-p-3_frame_2/frame_asset.png" alt=""
                                class="frame__asset--contain stretch fadee-in">
                        </Frame>
                        <Frame class="cell cell--w-6 cell--100">
                            <input class="cell__abs" type="range" min="0"
                                max="100" step="1" value="0" @input="onchange">
                        </Frame>
                        <Frame class="cell cell--w-2">
                            <img loading='lazy' src="@assets/ch-1-p-3_frame_3/frame_asset.png" alt=""
                                class="frame__asset--contain stretch fadee-in">
                        </Frame>
                        <Frame class="cell cell--w-4">
                            <img loading='lazy' src="@assets/ch-1-p-3_frame_4/frame_asset.png" alt=""
                                class="frame__asset--contain stretch fadee-in">
                        </Frame>

                        <Frame class="cell cell--w-6">
                            <img loading='lazy' src="@assets/ch-1-p-3_frame_5/frame_asset.png" alt=""
                                class="frame__asset--contain stretch fadee-in">
                        </Frame>
                    </div>
                </Page>
            </swiper-slide>

            <swiper-slide class="slide--xs background--base">
                <Page>
                    <div class="grid grid--center">
                      

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
    top: 0%;
    height: 150px;
}

.text--1 {
    top: calc(0% + 150px);
    width: 100%;
    max-width: 50%;
    left: calc(1rem + 1rem);
    object-fit: contain;
    height: 50px;
}
</style>