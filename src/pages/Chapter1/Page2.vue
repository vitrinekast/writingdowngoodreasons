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

const pageC = ref(null);
const activeIndex = ref(0);
const prikbordOpen = ref(true);
const coordVideo = ref(null);
const turnIndex = ref(0);
const images = [head_1, head_2, head_3, head_4];
const showLast = ref(false);
onMounted(() => {
    console.log("onMounted page2.vue");
    audioBus.on("playBackground", "bg__intro");

    Object.assign(pageC.value, {
        ...swiperParam,
        speed: 2000,
        centeredSlides: true,
        pagination: true,
    });

    pageC.value.initialize();

    pageC.value.addEventListener('swiperslidechangetransitionend', (event) => {
        activeIndex.value = event.detail[0].activeIndex;
    });

    if (!prikbordOpen.value && coordVideo.value) {
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

    if (e.target.value > 90) {
        showLast.value = true;
    }
}
</script>

<template>

    <main :class='activeIndex > 2 ? "background--base" : "background--lightblue"'>

        <Prikbord v-model="prikbordOpen" @close="onMenuClose" />

        <swiper-container class="mySwiper2" ref="pageC" init="false">
            <swiper-slide class="slide--100" v-if="!prikbordOpen">
                <Page class="page--fullwidth">
                    <img class="frame__asset" src="@assets/ch-1-p-2_frame_1/part1.webp" alt="">
                    <video class="frame__video" playsinline muted style="height: 90px" ref="coordVideo">
                        <source src="@assets/ch-1-p-2_frame_1/animation.mov" type='video/mp4; codecs="hvc1"'>
                        <source src="@assets/ch-1-p-2_frame_1/animation-vp9-chrome.webm" type="video/webm">
                    </video>
                </Page>
            </swiper-slide>
            <swiper-slide class="slide--auto" v-if="!prikbordOpen" data-swiper-parallax>
                <Page class="page--fullwidth">
                    <img class="frame__overlay" src="@assets/ch-1-p-2_frame_1/part2--feet.webp" alt=""
                        swiper-parallax-item slow opacity>
                    <img class="frame__asset" src="@assets/ch-1-p-2_frame_1/part2.webp" alt="">
                </Page>
            </swiper-slide>
            <swiper-slide data-swiper-parallax class="slide--auto background--base" v-if="!prikbordOpen"
                style="--delay: 1.5s; duration: 1.2s;">
                <Page class="page--fullwidth">

                    <Frame class="frame--1" swiper-parallax-item>
                        <img loading='lazy' src="@assets/ch-1-p-2_frame_1/frame1.png" alt="" class="frame__asset">
                    </Frame>
                    <img class="frame__asset text--1" src="@assets/ch-1-p-2_frame_1/tekst1.png" alt=""
                        swiper-parallax-item>
                    <img class="frame__asset" src="@assets/ch-1-p-2_frame_1/part3.png" alt="">
                </Page>
            </swiper-slide>

            <swiper-slide data-swiper-parallax class="slide--auto flex--center background--base"
                style="--delay: 1.5s; duration: 1.2s;">
                <Page size="sm">

                    <div class="grid">
                        <Frame class="cell cell--w-3" swiper-parallax-item>
                            <img class="frame__asset--contain" src="@assets/ch-1-p-2_frame_1/frame2.webp" alt="">
                        </Frame>

                        <Frame class="cell cell--w-3" swiper-parallax-item>
                            <img class="frame__asset--contain" src="@assets/ch-1-p-2_frame_1/frame3.webp" alt="">
                        </Frame>
                    </div>
                </Page>
            </swiper-slide>
            <swiper-slide class="slide--xs background--base" data-swiper-parallax
                style="--delay: 1.5s; duration: 1.2s;">
                <Page size="sm">
                    <div class="grid grid--center">
                        <Frame class="cell cell--w-3 cell--100" swiper-parallax-item>
                            <div v-for="(item, index) in images" :key="index" :data-index="index"
                                :style="{ opacity: index == turnIndex ? 1 : 0, transitionDelay: index == turnIndex ? 2.51 : 0 }"
                                class="frame__element stretch">
                                <img loading='lazy' :src="item" alt="" class="frame__asset--contain stretch">
                            </div>
                        </Frame>
                        <Frame class="cell cell--w-3" swiper-parallax-item>
                            <img loading='lazy' src="@assets/ch-1-p-3_frame_2/frame_asset.png" alt=""
                                class="frame__asset--contain stretch fadee-in">
                        </Frame>
                        <Frame class="cell cell--w-6 cell--100" swiper-parallax-item>
                            <input class="cell__abs" type="range" min="0" max="100" step="1" value="0"
                                @input="onchange">
                        </Frame>
                        <Frame class="cell cell--w-2 t--opacity" :style="{ 'opacity': showLast ? 1 : 0 }">
                            <img loading='lazy' src="@assets/ch-1-p-3_frame_3/frame_asset.png" alt=""
                                class="frame__asset--contain stretch fadee-in">
                        </Frame>
                        <Frame class="cell cell--w-4 t--opacity"
                            :style="{ 'opacity': showLast ? 1 : 0, 'transition-delay': '.5s' }">
                            <img loading='lazy' src="@assets/ch-1-p-3_frame_4/frame_asset.png" alt=""
                                class="frame__asset--contain stretch fadee-in">
                        </Frame>

                        <Frame class="cell cell--w-6 t--opacity"
                            :style="{ 'opacity': showLast ? 1 : 0, 'transition-delay': '3s' }">
                            <img loading='lazy' src="@assets/ch-1-p-3_frame_5/frame_asset.png" alt=""
                                class="frame__asset--contain stretch fadee-in">
                        </Frame>
                    </div>
                </Page>
            </swiper-slide>



            <nextPage to="/chapter-1/page-3" />

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