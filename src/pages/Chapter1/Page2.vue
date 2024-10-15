<script setup>
import Page from "@/components/Page.vue";
import 'swiper/css';
import 'swiper/css/effect-creative';
import { register } from 'swiper/element/bundle';
import 'swiper/element/css/pagination';
import { onMounted, ref } from 'vue';
import head_1 from '@/assets/images/ch-1-p-3_frame_1/frame_asset-1.webp';
import head_2 from '@/assets/images/ch-1-p-3_frame_1/frame_asset-2.webp';
import head_3 from '@/assets/images/ch-1-p-3_frame_1/frame_asset-3.webp';
import head_4 from '@/assets/images/ch-1-p-3_frame_1/frame_asset-4.webp';
import Prikbord from "@/components/Prikbord.vue";
import NextPage from "@/components/nextPage.vue";
import { bus } from "@/helpers/eventBus";
import { mapNumRange, swiperParam } from "@/helpers/utils";

register();

const pageC = ref(null);
const activeIndex = ref(0);
const prikbordOpen = ref(false);
const coordVideo = ref(null);
const turnIndex = ref(0);
const images = [head_1, head_2, head_3, head_4];
const showLast = ref(false);
const showNudge = ref(true);


onMounted(() => {
    bus.emit("playBackground", "bg__cold");

    prikbordOpen.value = true;

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

    pageC.value.addEventListener('swiperslidechange', (event) => {
        // hide the nudge on slide 3
        showNudge.value = event.detail[0].activeIndex != 4;
        // showNudge.value = event.detail[0].activeIndex != 3;
        bus.emit("extendNudge");
    });

    pageC.value.addEventListener('swipersliderfirstmove', (event) => {
        showNudge.value  = false;
    });

    pageC.value.addEventListener('touchend', (event) => {
        showNudge.value  = true;
    });

    if (!prikbordOpen.value && coordVideo.value) {
        coordVideo.value.play();
    }
});

bus.on('closePrikbord', () => {
    window.setTimeout(function () {
        coordVideo.value.play();
    }, 1000)
})

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

    <main class="background--base" :class='activeIndex > 0 ? "background--base" : "background--lightblue"'>

        <Prikbord v-model="prikbordOpen" />

        <div class="sideburn">
            <swiper-container class="swiper-container sideburn__container" ref="pageC" init="false">
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
                            <img loading='lazy' src="@assets/ch-1-p-2_frame_1/frame1.webp" alt="" class="frame__asset">
                        </Frame>
                        <img class="frame__asset text--1" src="@assets/ch-1-p-2_frame_1/tekst1.webp" alt=""
                            swiper-parallax-item>
                        <img class="frame__asset" src="@assets/ch-1-p-2_frame_1/part3.webp" alt="">
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
                                <img loading='lazy' src="@assets/ch-1-p-3_frame_2/frame_asset.webp" alt=""
                                    class="frame__asset--contain stretch">
                            </Frame>
                            <Frame class="cell cell--w-6 cell--100" swiper-parallax-item>
                                <input class="cell__abs" type="range" min="0" max="100" step="1" value="0"
                                    @input="onchange">
                            </Frame>
                            <Frame class="cell cell--w-2 t--opacity" :style="{ 'opacity': showLast ? 1 : 0 }">
                                <img loading='lazy' src="@assets/ch-1-p-3_frame_3/frame_asset.webp" alt=""
                                    class="frame__asset--contain stretch">
                            </Frame>
                            <Frame class="cell cell--w-4 t--opacity"
                                :style="{ 'opacity': showLast ? 1 : 0, 'transition-delay': '.5s' }">
                                <img loading='lazy' src="@assets/ch-1-p-3_frame_4/frame_asset.webp" alt=""
                                    class="frame__asset--contain stretch">
                            </Frame>

                            <Frame class="cell cell--w-6 t--opacity"
                                :style="{ 'opacity': showLast ? 1 : 0, 'transition-delay': '3s' }">
                                <img loading='lazy' src="@assets/ch-1-p-3_frame_5/frame_asset.webp" alt=""
                                    class="frame__asset--contain stretch">
                            </Frame>

                            <nextPage to="/chapter-1/page-3" v-if="showLast"
                                :style="{ 'pointer-events': showLast ? 'all' : 'none', 'opacity': showLast ? 1 : 0, 'transition-delay': '3s' }" />
                        </div>
                    </Page>
                </swiper-slide>

            </swiper-container>
            <Nudge nudge="slide" v-if="showNudge && !prikbordOpen" />
        </div>

    </main>
</template>

<style scoped>
.frame--1,
.text--1 {
    position: absolute;
    left: 1rem;
    top: 0%;
    height: 50%;
}

.text--1 {
    top: 55%;
    width: 100%;
    max-width: 50%;
    left: 0rem;
    object-fit: contain;
    height: 50px;
}

@media screen and (max-width: 800px) {
    .text--1 {
        left: 2rem;
    }
}
</style>