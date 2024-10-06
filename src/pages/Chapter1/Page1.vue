<script setup>
import Frame from "@/components/Frame.vue";
import Page from "@/components/Page.vue";
import Page3A from "@/components/frames/Chapter1/Page3A.vue";
import Page3B from "@/components/frames/Chapter1/Page3B.vue";
import { useMediaQuery } from '@vueuse/core';
import 'swiper/css';
import 'swiper/css/effect-creative';
import { register } from 'swiper/element/bundle';
import 'swiper/element/css/mousewheel';
import 'swiper/element/css/pagination';
import { onMounted, ref } from 'vue';
import { swiperParam } from '../../helpers/utils';
import { useAudioStore } from "../../store/audio";
import { audioBus } from "../../helpers/eventBus";
register();
const isMobile = useMediaQuery('(max-width: 900px)');
const pageC = ref(null);
const spreadC = ref(null);
const showDown = ref(true);
const audio = useAudioStore();
onMounted(() => {
    audioBus.emit("playBackground", "bg__intro");
    
    Object.assign(pageC.value, {
        ...swiperParam,
        speed: 1200,
        touchStartPreventDefault: false,
        pagination: true,
        draggable: true,
        cssMode: false,
        // effect: 'creative',
        breakpoints: {
            768: {
                freeMode: true,
            },
        },
        creativeEffect: {
            prev: {
                shadow: false,
                translate: [-20, "-10%", -180],
                scale: .8,
                rotate: [0, 0, 7],
                opacity: 0
            },
            perspective: true,
            next: {
                translate: [0, '100%', 0],
                opacity: 0
            }
        }
    });
    if (spreadC.value) {
        Object.assign(spreadC.value, {
            ...swiperParam,
            speed: 800,
            direction: "horizontal",
            navigation: true,
            touchStartPreventDefault: false,
        });
        spreadC.value.initialize();
    }
    pageC.value.initialize();
});
const goDown = () => {
    pageC.value.swiper.slideNext();
}
const goLeft = () => {
    console.log("go left");
    spreadC.value.swiper.slidePrev();
}
const goRight = () => {
    console.log("go right", spreadC.value.swiper);
    spreadC.value.swiper.slideNext();
}
const canGoLeft = false;
const canGoRight = false;
</script>
<template>
    <main>
        <swiper-container ref="pageC" init="false" parallax>
            <swiper-slide>
                <Page>
                    <img class="f-s-snow__text" src="@assets/ch-1-p-1_frame_2/frame_text.svg">
                    <Frame type="fit f-s-snow" mask="ch-1-p-1_frame_2" outline="ch-1-p-1_frame_2">
                        <div class="f-s-snow__snow-wrapper">
                            <img class="f-s-snow__snow" src="@assets/ch-1-p-1_frame_2/frame_snow.webp" alt="">
                        </div>
                        <img class="f-s-snow__person" src="@assets/ch-1-p-1_frame_2/frame_person.webp" alt="">
                        <img class="frame__background" src="@assets/ch-1-p-1_frame_2/frame_background.webp" alt="">
                    </Frame>
                </Page>
            </swiper-slide>
            <swiper-slide data-swiper-parallax>
                <Page size="sm">
                    <h2>I've always found great</h2>
                    <Frame size="sm" data-swiper-parallax>
                        <img class="frame__asset--contain" src="@assets/ch-1-p-1_frame_3/asset--trimmed.webp" alt="">
                    </Frame>
                    <h2 data-swiper-parallax>comfort in the cold</h2>
                </Page>
            </swiper-slide>
            <swiper-slide data-swiper-parallax>
                <Page type="fit-fill">
                    <div class="frame">
                        <img class="frame__asset--contain" src="@assets/ch-1-p-1_frame_4/asset.webp" alt="">
                        <video class="frame__video" autoplay playsinline loop muted>
                            <source src="@assets/ch-1-p-1_frame_4/animation--water.mov" type='video/mp4; codecs="hvc1"'>
                            <source src="@assets/ch-1-p-1_frame_4/animation--water-vp9-chrome.webm" type="video/webm">
                        </video>
                    </div>
                </Page>
            </swiper-slide>
            <swiper-slide data-swiper-parallax>
                <template v-if="!isMobile">
                    <section class="page--spread">
                        <Page3A />
                        <Page3B />
                    </section>
                </template>
                <template v-if="isMobile">
                    <swiper-container ref="spreadC" init="false">
                        <swiper-slide lazy="true">
                            <Page3A />
                        </swiper-slide>
                        <swiper-slide lazy="true">
                            <Page3B />
                        </swiper-slide>
                    </swiper-container>
                </template>
            </swiper-slide>
            <swiper-slide class="slide--auto">
                <nextPage to="/chapter-1/page-2" />
            </swiper-slide>
        </swiper-container>
        <nav class="nav--multislide" v-if="false">
            <div class="nav__horizontal">
                <button class='down' @click="goDown" v-if="showDown"></button>
            </div>
            <div class="nav__vertical">
                <button class="left" @click="goLeft" :disabled="canGoLeft"></button>
                <button class="right" @click="goRight" :disabled="canGoRight"></button>
            </div>
        </nav>
    </main>
</template>