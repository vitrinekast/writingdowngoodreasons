<script setup>
import { register } from 'swiper/element/bundle';
import { Keyboard, Mousewheel, EffectCreative, Navigation } from 'swiper/modules';
import Frame from "@/components/Frame.vue";
import Page from "@/components/Page.vue";
import Page3A from "@/components/frames/Chapter1/Page3A.vue";
import Page3B from "@/components/frames/Chapter1/Page3B.vue";
import { useMediaQuery } from '@vueuse/core'
import 'swiper/css';
import 'swiper/element/css/mousewheel';
import 'swiper/element/css/pagination';
import 'swiper/css/effect-creative';
import { onMounted, ref } from 'vue';

register();

const isMobile = useMediaQuery('(max-width: 900px)');
const modules = [Keyboard, Mousewheel, EffectCreative, Navigation];
const swiperContainer = ref(null);
const swiperContainerNest = ref(null);


// swiper parameters
const swiperParams = {
    slidesPerView: "auto",
    speed: 300,
    keyboard: true,
    direction: 'vertical',
    mousewheel: true,
    freeMode: "isMobile ? false : true",
    pagination: true,
    navigation: false,
    effect: 'creative',
    grabCursor: true,
    modules: modules,
    breakpoints: {
        768: {
            freeMode: true,
        },
    },
    creativeEffect: {
        prev: {
            shadow: false,
            translate: [-20, "-20%", -180],
            scale: .8,
            rotate: [0, 0, Math.random() * 10 - 10],
            opacity: 0
        },
        perspective: true,
        next: {
            translate: [0, '400%', 0],
            opacity: 0,
            scale: 1.2
        }
    }
};

onMounted(() => {
    Object.assign(swiperContainer.value, {
        direction: 'vertical',
        slidesPerView: 'auto',
        allowSlideNext: false,
        navigation: false,
        keyboard: false
    });
    Object.assign(swiperContainerNest.value, swiperParams);

    swiperContainer.value.initialize();
    swiperContainerNest.value.initialize();

    swiperContainerNest.value.addEventListener('swiperslidechange', (e) => {
        console.log(e.detail[0].activeIndex === e.detail[0].slides.length - 1);
        if (e.detail[0].activeIndex === e.detail[0].slides.length - 1) {
            console.log("last slide")
            swiperContainer.value.setAttribute("allow-slide-next", "true");
        } else {
            swiperContainer.value.setAttribute("allow-slide-next", "false");
        }
        console.log(e.detail[0].slides.length)
    });

    swiperContainer.value.addEventListener('swiperslidechange', (e) => {
        console.log("do some change");
    });


});


</script>

<template>

    <main>

        <swiper-container class="mySwiper swiper-h" ref="swiperContainer" init="false">
            <swiper-slide>
                <swiper-container class="mySwiper2" ref="swiperContainerNest" init="false">
                    <swiper-slide>
                        <Page>
                            <img class="f-s-snow__text" src="@assets/ch-1_frame_2/frame_text.svg">
                            <Frame type="fit f-s-snow" mask="ch-1_frame_2" outline="ch-1_frame_2">
                                <div class="f-s-snow__snow-wrapper">
                                    <img class="f-s-snow__snow" src="@assets/ch-1_frame_2/frame_snow.png" alt="">
                                </div>
                                <img class="f-s-snow__person" src="@assets/ch-1_frame_2/frame_person.png" alt="">
                                <img class="frame__background" src="@assets/ch-1_frame_2/frame_background.png" alt="">
                            </Frame>
                        </Page>
                    </swiper-slide>
                    <swiper-slide>
                        <Page size="sm">
                            <h2>I've always found great</h2>
                            <Frame size="sm">
                                <img class="frame__asset--contain" src="@assets/ch-1_frame_3/asset--trimmed.png" alt="">
                            </Frame>
                            <h2>comfort in the cold</h2>
                        </Page>
                    </swiper-slide>
                        <swiper-slide>
                            <Page type="fit-fill">
                                <div class="frame">
                                    <img class="frame__asset--contain" src="@assets/ch-1_frame_4/asset.png" alt="">

                                    <video class="frame__video" autoplay playsinline loop>
                                        <source src="@assets/ch-1_frame_4/animation--water.mov">
                                    </video>
                                </div>
                            </Page>
                        </swiper-slide>
                        <swiper-slide v-if="!isMobile">
                            <section class="page--spread">
                                <Page3A />
                                <Page3B />
                            </section>
                        </swiper-slide>

                        <swiper-slide v-if="isMobile">
                            <swiper-container :speed="1000" :slidesPerView="'auto'" :keyboard="true"
                                :direction="'horizontal'" :mousewheel="true" :pagination="true" :navigation="false"
                                :freeMode="isMobile ? false : true" :modules="modules">
                                <swiper-slide lazy="true">
                                    <Page3A />
                                </swiper-slide>
                                <swiper-slide lazy="true">
                                    <Page3B />
                                </swiper-slide>

                                <swiper-slide lazy="true">
                                    <router-link class="button" to="/chapter-2">Next</router-link>
                                </swiper-slide>
                            </swiper-container>
                        </swiper-slide>

                </swiper-container>
            </swiper-slide>
            <swiper-slide class="smaller">
                <h2>Wow you've unlocked the next chapter</h2>
                <p>Include some navigation here?</p>
                <router-link to="/chapter-2" class="button">Next</router-link>
            </swiper-slide>
        </swiper-container>
        <!-- <swiper-container ref="swiperContainer" init="false">
            <swiper-slide>
                <Page>
                    <img class="f-s-snow__text" src="@assets/ch-1_frame_2/frame_text.svg">
                    <Frame mask="ch-1_frame_2" outline="ch-1_frame_2">
                        <div class="f-s-snow__snow-wrapper">
                            <img class="f-s-snow__snow" src="@assets/ch-1_frame_2/frame_snow.png" alt="">
                        </div>
                        <img class="f-s-snow__person" src="@assets/ch-1_frame_2/frame_person.png" alt="">
                        <img class="frame__background" src="@assets/ch-1_frame_2/frame_background.png" alt="">
                    </Frame>
                </Page>
            </swiper-slide>
            <swiper-slide>
                <Page size="sm">
                    <h2>I've always found great</h2>
                    <Frame size="sm">
                        <img class="frame__asset--contain" src="@assets/ch-1_frame_3/asset--trimmed.png" alt="">
                    </Frame>
                    <h2>comfort in the cold</h2>
                </Page>
            </swiper-slide>
            <swiper-slide>
                <Page type="fit-fill">
                    <div class="frame">
                        <img class="frame__asset--contain" src="@assets/ch-1_frame_4/asset.png" alt="">

                        <video class="frame__video" autoplay playsinline loop>
                            <source src="@assets/ch-1_frame_4/animation--water.mov">
                        </video>
                    </div>
                </Page>
            </swiper-slide>

            <swiper-slide v-if="!isMobile">
                <section class="page--spread">
                    <Page3A />
                    <Page3B />
                </section>
            </swiper-slide>

            <swiper-slide v-if="isMobile">
                <swiper-container :speed="1000" :slidesPerView="'auto'" :keyboard="true" :direction="'horizontal'"
                    :mousewheel="true" :pagination="true" :navigation="false" :freeMode="isMobile ? false : true"
                    :modules="modules">
                    <swiper-slide lazy="true">
                        <Page3A />
                    </swiper-slide>
                    <swiper-slide lazy="true">
                        <Page3B />
                    </swiper-slide>

                    <swiper-slide lazy="true">
                        <router-link class="button" to="/chapter-2">Next</router-link>
                    </swiper-slide>
                </swiper-container>
            </swiper-slide>
            <swiper-slide class='smaller'>
                i open at the close
            </swiper-slide>
        </swiper-container> -->

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
    height: 100svh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: #e8e3d1; */
}

.smaller {
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
