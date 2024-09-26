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
import { swiperParam } from '../../utils';

register();

const isMobile = useMediaQuery('(max-width: 900px)');

const pageC = ref(null);
const pageTopC = ref(null);
const spreadC = ref(null);

const showDown = ref(true);


onMounted(() => {
    Object.assign(pageC.value, {
        ...swiperParam,
        direction: 'vertical',
        allowSlideNext: false,
        keyboard: false,
        slideActiveClass: 'parent-active'
    });
    Object.assign(pageTopC.value, {
        ...swiperParam,
        speed: 1200,
        direction: 'vertical',
        pagination: true,
        followFinger: true,
        effect: 'creative',
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
            navigation: true
        });
        spreadC.value.initialize();
    }


    pageC.value.initialize();
    pageTopC.value.initialize();

    pageTopC.value.addEventListener('swiperslidechange', (e) => {
        if(e.detail[0].activeIndex === 3) {
            if(spreadC.value.swiper.activeIndex > 0) {
                showDown.value = true;
            } else {
                showDown.value = false;
            }
        } else {
            showDown.value = true;
        }
        

        // check if everything is seen;
        if (e.detail[0].activeIndex === e.detail[0].slides.length - 1 && spreadC.value.swiper.activeIndex > 0) {
            pageC.value.setAttribute("allow-slide-next", "true");
        } else {
            pageC.value.setAttribute("allow-slide-next", "false");
        }
    });

});

const goDown = () => {
    pageTopC.value.swiper.slideNext();
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
const canGoRight =false;

</script>

<template>
    <main>
        <swiper-container ref="pageC" init="false">
            <swiper-slide>
                <swiper-container ref="pageTopC" init="false" parallax>
                    <swiper-slide>
                        <Page>
                            <img class="f-s-snow__text" src="@assets/ch-1-p-1_frame_2/frame_text.svg">
                            <Frame type="fit f-s-snow" mask="ch-1-p-1_frame_2" outline="ch-1-p-1_frame_2">
                                <div class="f-s-snow__snow-wrapper">
                                    <img class="f-s-snow__snow" src="@assets/ch-1-p-1_frame_2/frame_snow.png" alt="">
                                </div>
                                <img class="f-s-snow__person" src="@assets/ch-1-p-1_frame_2/frame_person.png" alt="">
                                <img class="frame__background" src="@assets/ch-1-p-1_frame_2/frame_background.png" alt="">
                            </Frame>
                        </Page>
                    </swiper-slide>
                    <swiper-slide data-swiper-parallax>
                        <Page size="sm">
                            <h2 >I've always found great</h2>
                            <Frame size="sm" data-swiper-parallax>
                                <img class="frame__asset--contain" src="@assets/ch-1-p-1_frame_3/asset--trimmed.png" alt="">
                            </Frame>
                            <h2 data-swiper-parallax>comfort in the cold</h2>
                        </Page>
                    </swiper-slide>
                    <swiper-slide data-swiper-parallax>
                        <Page type="fit-fill">
                            <div class="frame">
                                <img class="frame__asset--contain" src="@assets/ch-1-p-1_frame_4/asset.png" alt="">

                                <video class="frame__video" autoplay playsinline loop muted>
                                    <source src="@assets/ch-1-p-1_frame_4/animation--water.mov">
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
                </swiper-container>
            </swiper-slide>

            <nextPage />
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